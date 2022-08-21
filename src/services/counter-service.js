import restClient from "./rest-client-service";
import { useState, useEffect } from "react";
import { CurrentPet } from "../components/pets/CounterList";

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
  console.log(urlId);
  const counters = [];
  console.log(loadedCounters);

  console.log(loadedCounters[0].data.counterData.linkedPet);

  for (var i = 0; i < loadedCounters.length; i++) {
    if (loadedCounters[i].data.counterData.linkedPet === urlId) {
      counters.push(loadedCounters[i]);
      console.log(counters[0]);
      console.log(counters[0].data.counterData.metric);
      console.log(counters);
    }
  }
  return <CurrentPet counters={counters} />;
};

const SetCounter = (props) => {
  var counterData = props;
  console.log(counterData);
  restClient()
    .post("/counters", { counterData })
    .then((response) => {
      return response.data;
    })
    .then((res) => {
      console.log(res);
    });
};

const DeleteCounter = (counterId) => {
  console.log(counterId);
  axios.delete(urlBase.default + "counters/" + counterId).then((res) => {
    console.log(res);
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export { GetCounters, DeleteCounter, SetCounter };
