import classes from "./PetList.module.css";
import Card from "../ui/Card";
import PetsIcon from "@mui/icons-material/Pets";
import { DeletePet } from "../../services/pet-service";

//Produces content for pet cards

function DeletePetHandler(petData) {
  DeletePet(petData.id);
}

function Pet(props) {
  var id = props.id;
  console.log(props);

  var trackerList = "/pet-page/" + id;

  var addTrackerPage = "/add-tracker/" + id;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.species}</p>
        </div>
        <div className={classes.actions}>
          <a className={classes.actions} href={trackerList}>
            View Trackers
            <PetsIcon />
          </a>
          <a className={classes.actions} href={addTrackerPage}>
            Add Tracker
            <PetsIcon />
          </a>
          <button className={classes.actions}>
            Link Account
            <PetsIcon />
          </button>
          <button
            className={classes.actions}
            onClick={() => {
              DeletePetHandler(props);
            }}
          >
            DeletePet
            <PetsIcon />
          </button>
        </div>
      </Card>
    </li>
  );
}

function PetList(props) {
  return (
    <ul className={classes.list}>
      {props.pets.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.data.petData.name}
          species={pet.data.petData.species}
        />
      ))}
    </ul>
  );
}

export { PetList };
