import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";

//Produces content for pet cards

var value = 0;

function CurrentPet(props) {
  function DeleteTrackerHandler(counterData) {
    console.log(counterData);
    DeleteCounter(counterData.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.linkedPetName}</h3>
          <p>
            Has had {value} of {props.amount} {props.metric}
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
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.counters.map((count) => (
        <CurrentPet
          key={count.id}
          id={count.id}
          linkedPet={count.data.counterData.linkedPet}
          value={count.data.counterData.value}
          amount={count.data.counterData.amount}
          metric={count.data.counterData.metric}
        />
      ))}
    </ul>
  );
}

export { CounterList, CurrentPet };
