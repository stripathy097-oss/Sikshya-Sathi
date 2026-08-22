import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth';
import { auth } from '../firebaseClient';

interface AuthContextType {
  user: User | null;
  isLoadingAuth: boolean;
  authConfigured: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getIdToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  // If Firebase Auth isn't configured yet (missing env vars), there is nothing to "load" —
  // treat this as already-resolved so the rest of the app isn't stuck on a spinner forever.
  const [isLoadingAuth, setIsLoadingAuth] = useState(!!auth);

  useEffect(() => {
    if (!auth) return; // Not configured — stay logged out, don't crash.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoadingAuth(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error('Admin login is not configured yet.');
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!auth) return;
    await firebaseSignOut(auth);
  };

  // Every admin API call needs this token attached — it's how the server verifies who you are.
  const getIdToken = async (): Promise<string | null> => {
    if (!auth || !auth.currentUser) return null;
    return auth.currentUser.getIdToken();
  };

  return (
    <AuthContext.Provider value={{ user, isLoadingAuth, authConfigured: !!auth, login, logout, getIdToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
