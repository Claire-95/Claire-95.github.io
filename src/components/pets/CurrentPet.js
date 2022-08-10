// import classes from "./PetList.module.css";
import Card from "../ui/Card";
import classes from "./PetList.module.css";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { GetCounter } from "../../services/counter-service";

function Pet(props) {
  GetCounter();

  const [deletePet, setDeletePet] = useState("Delete Pet");

  function DeletePetHandler(petData) {
    DeletePet(petData.id);
    setDeletePet("Deleted");
  }

  var id = props.id;

  var url = "/pet-page/" + id;

  console.log(url);

  return (
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
      </div>
    </Card>
  );
}

function CurrentPet(props) {
  console.log(props);
  console.log(props.pet.data.petData.firstName);
  return (
    <Pet
      key={props.pet.id}
      id={props.pet.id}
      firstName={props.pet.data.petData.firstName}
      lastName={props.pet.data.petData.lastName}
      species={props.pet.data.petData.species}
      amount={props.pet.data.petData.amount}
      metric={props.pet.data.petData.metric}
    />
  );
}

export { CurrentPet };
