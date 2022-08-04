import Pet from "./Pet";
import classes from "./PetList.module.css";

function PetList(props) {
  console.log(props.pets);
  return (
    <ul className={classes.list}>
      {props.pets.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          firstName={pet.data.petData.firstName}
          lastName={pet.data.petData.lastName}
          species={pet.data.petData.species}
        />
      ))}
    </ul>
  );
}

export default PetList;
