import classes from "./PetList.module.css";
import Card from "../ui/Card";

//Produces content for pet cards

function CurrentPet(props) {
  console.log(props);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.value}</h3>
        </div>
        <div className={classes.actions}></div>
      </Card>
    </li>
  );
}

function CounterList(props) {
  return (
    <ul className={classes.list}>
      {props.counters.map((count) => (
        <CurrentPet
          key={count.id}
          id={count.id}
          linkedPet={count.data.linkedPet}
          linkedPetName={count.data.linkedPetName}
          value={count.data.value}
        />
      ))}
    </ul>
  );
}

export { CounterList, CurrentPet };
