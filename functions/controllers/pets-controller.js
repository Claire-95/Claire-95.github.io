/* eslint-disable indent */
/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const db = require("../services/database-service");
const express = require("express");
// eslint-disable-next-line object-curly-spacing
const router = express.Router();
const petCollection = "pets";
const counterCollection = "counters";
const FieldValue = require("firebase-admin").firestore.FieldValue;

// Get pets
router.get("/", async (req, res) => {
  try {
    if (!req.user.loggedIn) {
      res.status(401).send({});
    }
    const petQuerySnapshot = await db
      .collection(petCollection)
      .where("sharedOwners", "array-contains", req.user.email)
      .get();
    const pets = [];
    petQuerySnapshot.forEach((doc) => {
      pets.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    const secondPetQuerySnapshot = await db
      .collection(petCollection)
      .where("owner", "==", req.user.email)
      .get();
    secondPetQuerySnapshot.forEach((doc) => {
      pets.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(pets);
    console.log(pets);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Post a Pet to database
router.post("/", async (req, res) => {
  try {
    const setData = {
      owner: req.user.email,
      name: req.body.petData.name,
      species: req.body.petData.species,
      sharedOwners: [],
    };

    await db.collection(petCollection).doc().set(setData);
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update Pet
router.patch("/:petId", async (req, res) => {
  try {
    const petId = req.params.petId;

    const sharedOwners = req.body.petData.sharedOwners;
    console.log(sharedOwners);

    const setData = {
      name: req.body.petData.name,
      species: req.body.petData.species,
    };

    await db
      .collection(petCollection)
      .doc(petId)
      .update({
        sharedOwners: FieldValue.arrayUnion(sharedOwners),
      });

    await db.collection(petCollection).doc(petId).update(setData);

    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete pet and tracker
router.delete("/:petId", async (req, res) => {
  try {
    const petId = req.params.petId;

    await db.collection(petCollection).doc(petId).delete();

    await db
      .collection(counterCollection)
      .where("linkedPet", "==", petId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });

    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
