import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

/**
 * This config (apiKey, authDomain, etc.) is the PUBLIC Firebase web-app config — it identifies
 * which Firebase project to talk to, but it is not a secret and is safe to ship in frontend
 * code (this is standard/expected practice for Firebase). The actual security boundary is the
 * server-side ID-token verification in server.ts (see `requireAdmin`), not this config.
 *
 * These values come from: Firebase Console → Project Settings → General → "Your apps" → Web app.
 * Set them as environment variables (VITE_FIREBASE_...) in Render so they get baked in at build time.
 *
 * IMPORTANT: this file must NEVER throw at import time. It is imported by code used across the
 * whole app (not just the admin panel), so if Firebase Auth isn't configured yet, we fail
 * gracefully here (auth = null) instead of crashing every page for every student.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

export let auth: Auth | null = null;

if (firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId) {
  try {
    const firebaseApp = initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
  } catch (err) {
    console.error('Firebase Auth failed to initialize:', err);
    auth = null;
  }
} else {
  console.warn('Firebase Auth is not configured (missing VITE_FIREBASE_* env vars) — admin login will be unavailable until this is set up.');
}
