// import classes from "./PetList.module.css";
import { Pet } from "./Pet";

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
