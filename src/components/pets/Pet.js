import Card from "../ui/Card";
import classes from "./Pet.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import PetPage from "../../pages/PetPage";

//Produces content for pet cards

function Pet(props) {
  const [deletePet, setDeletePet] = useState("Delete Pet");

  function DeletePetHandler(petData) {
    DeletePet(petData.id);
    setDeletePet("Deleted");
  }

  function OpenPetHandler() {
    PetPage();
  }

  var id = props.id;

  var url = "/pet-page/" + id;

  console.log(url);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstName}</h3>
          <p>{props.lastName}</p>
          <p>{props.species}</p>
          <p>
            {props.amount} {props.metric} per day
          </p>
          <ProgressBar />
        </div>
        <div className={classes.actions}>
          <button
            className={classes.actions}
            onClick={() => {
              DeletePetHandler(props);
            }}
          >
            {deletePet}
            <PetsIcon />
          </button>
          <a
            className={classes.actions}
            href={url}
            onClick={() => {
              OpenPetHandler();
            }}
          >
            Open Pet
            <PetsIcon />
          </a>
        </div>
      </Card>
    </li>
  );
}

export { Pet };
