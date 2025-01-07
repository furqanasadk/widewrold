import admin from "firebase-admin";
import serviceAccount from "../../../wide-worlds-firebase-adminsdk-walua-7ed6836862.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const firestore = admin.firestore();
