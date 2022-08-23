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
    <li>
      <Card>
        <div>
          <h3>{props.name}</h3>
          <p>{props.species}</p>
        </div>
        <div>
          <a className={classes.button} href={trackerList}>
            View Trackers
            <PetsIcon />
          </a>
          <a className={classes.button} href={addTrackerPage}>
            Add Tracker
            <PetsIcon />
          </a>
          <button className={classes.button}>
            Link Account
            <PetsIcon />
          </button>
          <button
            className={classes.button}
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
          owner={pet.data.owner}
        />
      ))}
    </ul>
  );
}

export { PetList };
