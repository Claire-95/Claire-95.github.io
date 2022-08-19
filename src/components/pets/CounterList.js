import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";

//Produces content for pet cards

function CurrentPet(props) {
  console.log(props);

  function DeleteTrackerHandler(counterData) {
    DeleteCounter(counterData.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.linkedPetName}</h3>
          <p>
            Has been fed {props.value} of {props.amount} {props.metric}
          </p>
          <button
            className={classes.actions}
            onClick={() => {
              DeleteTrackerHandler(props);
            }}
          >
            Delete Tracker
          </button>
        </div>
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
