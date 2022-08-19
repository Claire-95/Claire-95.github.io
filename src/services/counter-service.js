import restClient from "./rest-client-service";
import { useState, useEffect } from "react";
import { CounterList } from "../components/pets/CounterList";

const urlBase = require("../constants");
const axios = require("axios").default;

const GetCounters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCounters, setLoadedCounters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    restClient()
      .get("counters")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const counters = [];

        for (const key in data) {
          const counter = {
            id: key,
            ...data[key],
          };

          counters.push(counter);
        }
        setIsLoading(false);
        setLoadedCounters(counters);
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
  const counters = [];

  for (var i = 0; i < loadedCounters.length; i++) {
    if (loadedCounters[i].data.linkedPet === urlId) {
      counters.push(loadedCounters[i]);
    }
  }
  return <CounterList counters={counters} />;
};

const DeleteCounter = (counterId) => {
  console.log(counterId);
  axios.delete(urlBase.default + "counters/" + counterId).then((res) => {
    console.log(res);
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export { GetCounters, DeleteCounter };
