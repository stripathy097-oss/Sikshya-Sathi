import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CHAPTERS_DATA, PDF_LIBRARY_DATA, MOCK_TESTS } from '../data/odishaData';
import { Search, X, BookOpen, FileText, Trophy, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setActiveTab, setSelectedChapter, classLevel } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const matchedChapters = CHAPTERS_DATA.filter(
    (c) =>
      c.classLevel === classLevel &&
      (c.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.titleOdia.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.summaryEnglish.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const matchedPdfs = PDF_LIBRARY_DATA.filter(
    (p) =>
      p.classLevel === classLevel &&
      (p.titleEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.titleOdia.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
            <Search className="w-4 h-4" />
            <span>Global Search ({classLevel})</span>
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          type="text"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search chapters, formulae, PDFs, questions..."
          className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="overflow-y-auto space-y-4 pr-1 flex-1">
          {searchTerm.trim() === '' ? (
            <p className="text-xs text-slate-400 text-center py-6">
              Type keywords above to search across all BSE Odisha study materials.
            </p>
          ) : (
            <>
              {/* Chapters match */}
              {matchedChapters.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Chapter Notes ({matchedChapters.length})
                  </span>
                  {matchedChapters.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setSelectedChapter(ch);
                        setIsSearchOpen(false);
                        setActiveTab('learn');
                      }}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500 text-left transition-all flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                          {ch.titleEnglish}
                        </h4>
                        <p className="text-[11px] text-slate-500">{ch.titleOdia}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                    </button>
                  ))}
                </div>
              )}

              {/* PDFs match */}
              {matchedPdfs.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    PDF Books ({matchedPdfs.length})
                  </span>
                  {matchedPdfs.map((pdf) => (
                    <button
                      key={pdf.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setActiveTab('pdf');
                      }}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 hover:border-sky-500 text-left transition-all flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                          {pdf.titleEnglish}
                        </h4>
                        <p className="text-[11px] text-slate-500">{pdf.titleOdia}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-sky-500" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
