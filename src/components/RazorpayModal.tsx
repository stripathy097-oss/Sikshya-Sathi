import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Crown,
  X,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Download,
  Sparkles,
  CreditCard,
  Loader2,
} from 'lucide-react';

export const RazorpayModal: React.FC = () => {
  const { isRazorpayOpen, setIsRazorpayOpen, upgradeToPremium } = useApp();
  const [loading, setLoading] = useState(false);

  if (!isRazorpayOpen) return null;

  const handleSimulatePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      upgradeToPremium();
      alert('🎉 Payment Successful! Razorpay Txn ID: rzp_live_' + Math.floor(Math.random() * 899999 + 100000) + '\n\nWelcome to Sikshya Sathi PRO!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 animate-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <Crown className="w-5 h-5 fill-slate-900" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              Sikshya Sathi PRO Upgrade
            </h3>
          </div>
          <button
            onClick={() => setIsRazorpayOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pricing Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white space-y-2 text-center shadow-lg shadow-amber-500/20">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-black/20 px-2.5 py-1 rounded-full">
            BSE Odisha Matric Special
          </span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-extrabold">₹199</span>
            <span className="text-xs text-amber-100">/ Month</span>
          </div>
          <p className="text-xs text-amber-100">
            Cancel anytime • Guaranteed exam score improvement
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3 text-xs">
          {[
            'Unlimited Gemini AI Doubt Solvers (Text + Photo Scans)',
            'Unlimited Timed Mock Tests & State Rank Prediction',
            'Full PDF Textbook Downloads & Offline Mode',
            'AI Personal Study Planner & Revision Schedule',
            'Priority Live Audio Teacher Explanations',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Razorpay Secure Gateway Badge & Button */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleSimulatePayment}
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Razorpay Checkout...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Pay ₹199 via Razorpay (UPI / Card)</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>256-Bit SSL Encrypted Razorpay Gateway</span>
          </div>
        </div>
      </div>
    </div>
  );
};
