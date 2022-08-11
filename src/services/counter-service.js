import restClient from "./rest-client-service";

const GetCounter = () => {
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

      console.log(counters);
    });
};

export { GetCounter };
