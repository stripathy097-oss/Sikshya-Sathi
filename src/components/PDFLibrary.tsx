import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PDF_LIBRARY_DATA, SUBJECTS } from '../data/odishaData';
import { PDFDocument } from '../types';
import {
  FileText,
  Download,
  Search,
  Lock,
  Eye,
  CheckCircle2,
  Crown,
  BookOpen,
  X,
  FileCheck,
} from 'lucide-react';

export const PDFLibrary: React.FC = () => {
  const {
    classLevel,
    language,
    student,
    updateStudentProfile,
    setIsRazorpayOpen,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewPdf, setPreviewPdf] = useState<PDFDocument | null>(null);

  const categories = ['All', 'Textbook', 'Notes', 'PYQ (Previous Year)', 'Sample Paper'];

  const filteredPdfs = PDF_LIBRARY_DATA.filter((pdf) => {
    const matchesClass = pdf.classLevel === classLevel;
    const matchesCategory =
      selectedCategory === 'All' || pdf.category === selectedCategory;
    const matchesSearch =
      pdf.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pdf.titleOdia.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesCategory && matchesSearch;
  });

  const handleDownload = (pdf: PDFDocument) => {
    if (pdf.isPremium && !student.isPremium) {
      setIsRazorpayOpen(true);
      return;
    }

    if (!student.downloadedPdfs.includes(pdf.id)) {
      updateStudentProfile({
        downloadedPdfs: [...student.downloadedPdfs, pdf.id],
      });
    }

    alert(`Downloading "${pdf.titleEnglish}" (${pdf.sizeMB} MB) to offline storage...`);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white shadow-xl shadow-sky-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              {language === 'Odia' ? 'PDF ପାଠ୍ୟପୁସ୍ତକ o ସମାଧାନ ସଂଗ୍ରହ' : 'BSE PDF Study Material Library'}
            </h1>
            <p className="text-xs text-sky-100 mt-1">
              Official TBW Books, Solved 10-Year Board Papers & Chapter Formulae
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search textbook name, PYQs, or subject notes..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-xs border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PDF Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPdfs.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <FileText className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              No PDF files found matching your search.
            </p>
          </div>
        ) : (
          filteredPdfs.map((pdf) => {
            const isDownloaded = student.downloadedPdfs.includes(pdf.id);
            const isLocked = pdf.isPremium && !student.isPremium;

            return (
              <div
                key={pdf.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs hover:border-sky-400 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300">
                      {pdf.category} • {pdf.classLevel}
                    </span>
                    {pdf.isPremium && (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                        <Crown className="w-3 h-3" />
                        PRO PDF
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {pdf.titleEnglish}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {pdf.titleOdia}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pages: {pdf.pagesCount} • Size: {pdf.sizeMB} MB
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setPreviewPdf(pdf)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => handleDownload(pdf)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isLocked
                        ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                        : isDownloaded
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                        : 'bg-sky-600 hover:bg-sky-700 text-white shadow-xs'
                    }`}
                  >
                    {isLocked ? (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>Unlock PRO</span>
                      </>
                    ) : isDownloaded ? (
                      <>
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Saved Offline</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* PDF Modal Reader Simulator */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-600" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {previewPdf.titleEnglish}
                </h3>
              </div>
              <button
                onClick={() => setPreviewPdf(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated PDF Viewer Pages */}
            <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 text-center space-y-3 min-h-[280px] flex flex-col justify-center items-center">
              <FileText className="w-12 h-12 text-sky-500 animate-pulse" />
              <h4 className="font-extrabold text-base text-slate-800 dark:text-slate-200">
                {previewPdf.titleOdia}
              </h4>
              <p className="text-xs text-slate-500 max-w-md">
                Displaying high-resolution vector PDF pages (1 of {previewPdf.pagesCount}). Prepared specifically for BSE Odisha matriculation candidates.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewPdf(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setPreviewPdf(null);
                  handleDownload(previewPdf);
                }}
                className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md"
              >
                Download PDF ({previewPdf.sizeMB} MB)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
