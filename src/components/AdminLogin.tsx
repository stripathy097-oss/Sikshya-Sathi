import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Loader2, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AdminLogin: React.FC = () => {
  const { login } = useAuth();
  const { setActiveTab } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError('Incorrect email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 px-4">
      <button
        onClick={() => setActiveTab('home')}
        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to app
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="text-center space-y-1">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-600 text-white flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="font-bold text-lg text-slate-900 dark:text-slate-100">Admin Login</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Sikshya Sathi content management</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-500 block mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm border border-slate-200 dark:border-slate-700"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm border border-slate-200 dark:border-slate-700"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-semibold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};
