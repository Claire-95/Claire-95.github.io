import classes from "./PetList.module.css";
import Card from "../ui/Card";
import PetsIcon from "@mui/icons-material/Pets";

//Produces content for pet cards

function Pet(props) {
  var id = props.id;

  var trackerList = "/pet-page/" + id;

  var addTrackerPage = "/add-tracker/" + id;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstName}</h3>
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
          firstName={pet.data.petData.firstName}
          lastName={pet.data.petData.lastName}
          species={pet.data.petData.species}
          amount={pet.data.petData.amount}
          metric={pet.data.petData.metric}
        />
      ))}
    </ul>
  );
}

export { PetList };
