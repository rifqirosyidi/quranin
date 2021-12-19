import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import app from "gatsby-plugin-firebase-v9.0";

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
