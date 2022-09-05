import restClient from "./rest-client-service";

const urlBase = require("../constants");
const axios = require("axios").default;

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

const UpdateCounter = (props) => {
  var counterData = props;
  const counterId = counterData.id;

  console.log(counterData);

  restClient()
    .patch(urlBase.default + "counters/" + counterId, { counterData })
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
export { DeleteCounter, SetCounter, UpdateCounter };
