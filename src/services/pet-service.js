import restClient from "./rest-client-service";
import { useState, useEffect } from "react";
import { PetList } from "../components/pets/PetList";
import { CounterList } from "../components/pets/CounterList";

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

  for (var i = 0; i < loadedPets.length; i++) {
    if (loadedPets[i].id === urlId) {
      var currentPet = loadedPets[i];
      var currentPetId = currentPet.id;
    }
  }

  if (urlId === currentPetId) {
    return <CounterList />;
  } else {
    console.log(loadedPets);
    return <PetList pets={loadedPets} />;
  }
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

const UpdatePet = (props) => {
  var petData = props;
  const petId = petData.id;

  restClient()
    .patch(urlBase.default + "pets/" + petId, { petData })
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
export { GetPets, SetPet, DeletePet, UpdatePet };
