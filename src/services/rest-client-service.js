const axios = require("axios").default;
const authService = require("./authentication-service");
const urlBase = require("../constants");

module.exports = () => {
  return axios.create({
    baseURL: urlBase.default,
    timeout: 10000,
    headers: { Authentication: "Bearer " + authService.AccessToken },
  });
};
