import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";

//Produces content for pet cards

function DeleteTrackerHandler(counterData) {
  console.log(counterData);
  DeleteCounter(counterData.id);
}

function CurrentPet(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.trackable}</h3>
          <p>
            {props.value} of {props.amount} {props.metric} complete!
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
          linkedPet={count.data.counterData.linkedPet}
          value={count.data.counterData.value}
          amount={count.data.counterData.amount}
          metric={count.data.counterData.metric}
          trackable={count.data.counterData.trackable}
        />
      ))}
    </ul>
  );
}

export { CounterList, CurrentPet };
