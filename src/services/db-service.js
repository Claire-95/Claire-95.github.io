const admin = require("firebase-admin");

const db = admin.firestore();

export const petCollectionRef = db.collection("pets").doc();
