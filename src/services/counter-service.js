import restClient from "./rest-client-service";

const urlBase = require("../constants");
const axios = require("axios").default;

const GetCounters = () => {
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

      return counters;
    });
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

//Delete counter
const DeleteCounter = (counterId) => {
  axios.delete(urlBase.default + "counters/" + counterId).then((res) => {
    console.log(res);
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export { GetCounters, SetCounter, DeleteCounter };
