import urlBase from "../constants";

const GetPets = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log("get pets result received " + updatePetsCallback);
    updatePetsCallback(xhttp.responseText);
  };
  xhttp.open("GET", urlBase + "pets", true);
  xhttp.send();
};
var updatePetsCallback;
const SetPetsCallback = (updatePetsCallbackValue) => {
  updatePetsCallback = updatePetsCallbackValue;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { SetPetsCallback, GetPets };
