import classes from "./PetList.module.css";
import Card from "../ui/Card";

//Produces content for pet cards

function Pet(props) {
  var id = props.id;

  var trackerList = "/pet-page/" + id;

  var addTrackerPage = "/add-tracker/" + id;

  var editPetPage = "/edit-pet/" + id;

  return (
    <li>
      <Card>
        <div>
          <h1 className={classes.name}>{props.name}</h1>
        </div>

        <div>
          <a className={classes.button} href={trackerList}>
            View Trackers
          </a>
          <a className={classes.button} href={addTrackerPage}>
            Add Tracker
          </a>
          <a className={classes.button} href={editPetPage}>
            Edit Pet
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
          name={pet.data.name}
          species={pet.data.species}
          owner={pet.data.owner}
          sharedOwners={pet.data.sharedOwners}
        />
      ))}
    </ul>
  );
}

export { PetList };
