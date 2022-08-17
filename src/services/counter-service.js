import restClient from "./rest-client-service";

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

// eslint-disable-next-line import/no-anonymous-default-export
export { GetCounters };
