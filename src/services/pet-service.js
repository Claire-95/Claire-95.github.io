import urlBase from "../constants";
import { useState, useEffect } from "react";
import PetList from "../components/pets/PetList";

const GetPets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPets, setLoadedPets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(urlBase + "pets")
      .then((response) => {
        return response.json();
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

  return (
    <section>
      <h1>All Pets</h1>
      <PetList pets={loadedPets} />
    </section>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { GetPets };
