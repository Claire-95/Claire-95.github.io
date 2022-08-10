import restClient from "./rest-client-service";
import { useState, useEffect } from "react";
import { PetList } from "../components/pets/PetList";
import { CurrentPet } from "../components/pets/CurrentPet";

const urlBase = require("../constants");
const axios = require("axios").default;

const GetPets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    restClient()
      .get("pets")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const pets = [];

        for (const key in data) {
          const pet = {
            id: key,
            ...data[key],
          };

          pets.push(pet);
        }

        setIsLoading(false);
        console.log("done loading");
        setLoadedPets(pets);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const urlId = window.location.pathname.split("/").pop();

  if (urlId === "all-pets")
    return (
      <section>
        <h1>All Pets</h1>
        <PetList pets={loadedPets} />
      </section>
    );
  else
    for (var i = 0; i < loadedPets.length; i++) {
      if (loadedPets[i].id === urlId) {
        var currentPet = loadedPets[i];
        console.log(currentPet);
      }
    }
  return (
    <section>
      <h1>Pet</h1>
      <CurrentPet pet={currentPet} />
    </section>
  );
};

const SetPet = (props) => {
  var petData = props;
  console.log(petData);
  restClient()
    .post("/pets", { petData })
    .then((response) => {
      return response.data;
    })
    .then((res) => {
      console.log(res);
    });
};

//Delete pet
const DeletePet = (petId) => {
  axios.delete(urlBase.default + "pets/" + petId).then((res) => {
    console.log(res);
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export { GetPets, SetPet, DeletePet };
