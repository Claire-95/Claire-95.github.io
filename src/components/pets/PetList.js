import Pet from "./Pet";
import classes from "./PetList.module.css";

function PetList(props) {
  return (
    <ul className={classes.list}>
      {props.pets.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          firstName={pet.firsName}
          lastName={pet.lastName}
          species={pet.species}
        />
      ))}
    </ul>
  );
}

export default PetList;
