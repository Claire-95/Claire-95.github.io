import classes from "./PetList.module.css";
import Card from "../ui/Card";

//Produces content for pet cards

function CurrentPet(props) {
  console.log(props);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.linkedPetName}</h3>
          <p>
            Has been fed {props.value} of {props.amount} {props.metric}
          </p>
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
          amount={count.data.amount}
          metric={count.data.metric}
        />
      ))}
    </ul>
  );
}

export { CounterList, CurrentPet };
