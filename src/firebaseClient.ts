import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/**
 * This config (apiKey, authDomain, etc.) is the PUBLIC Firebase web-app config — it identifies
 * which Firebase project to talk to, but it is not a secret and is safe to ship in frontend
 * code (this is standard/expected practice for Firebase). The actual security boundary is the
 * server-side ID-token verification in server.ts (see `requireAdmin`), not this config.
 *
 * These values come from: Firebase Console → Project Settings → General → "Your apps" → Web app.
 * Set them as environment variables (VITE_FIREBASE_...) in Render so they get baked in at build time.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
