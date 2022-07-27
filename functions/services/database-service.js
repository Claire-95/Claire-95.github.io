const admin = require("firebase-admin");

const db = admin.firestore();

exports.db = db;
