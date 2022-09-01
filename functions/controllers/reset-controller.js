/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

const db = require("../services/database-service");
const counterCollection = "counters";

const counterResetController = async () => {
  try {
    const counterQuerySnapshot = await db.collection(counterCollection).get();

    counterQuerySnapshot.forEach((doc) => {
      {
        db.collection(counterCollection)
          .doc(doc.id)
          .update({ owner: "dog@gmail" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = counterResetController;
