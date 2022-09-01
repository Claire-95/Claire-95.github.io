import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";
import { UpdateCounter } from "../../services/counter-service";
// import PetsIcon from "@mui/icons-material/Pets";

//Produces content for pet cards

function DeleteTrackerHandler(counterData) {
  console.log(counterData);
  DeleteCounter(counterData.id);
}

function IncrementTrackerHandler(counterData) {
  console.log(counterData);
  console.log(counterData.value);
  var value = counterData.value + 1;
  var newData = {
    amount: counterData.amount,
    id: counterData.id,
    linkedPet: counterData.linkedPet,
    metric: counterData.metric,
    trackable: counterData.trackable,
    value: value,
  };
  console.log(newData);
  UpdateCounter(newData);
}

function DecrementTrackerHandler(counterData) {
  console.log(counterData);
  console.log(counterData.value);
  var value = counterData.value - 1;
  var newData = {
    amount: counterData.amount,
    id: counterData.id,
    linkedPet: counterData.linkedPet,
    metric: counterData.metric,
    trackable: counterData.trackable,
    value: value,
    owner: counterData.owner,
  };
  console.log(newData);
  UpdateCounter(newData);
}

function CurrentPet(props) {
  return (
    <li>
      <Card>
        <div>
          <h>{props.name}</h>
          <h3>{props.trackable}</h3>
          <p>
            {props.value} of {props.amount} {props.metric} complete!
          </p>
          <button
            className={classes.button}
            onClick={() => {
              DeleteTrackerHandler(props);
            }}
          >
            Delete Tracker
          </button>
          <button
            className={classes.button}
            onClick={() => {
              IncrementTrackerHandler(props);
            }}
          >
            Increment Tracker +
          </button>
          <button
            className={classes.button}
            onClick={() => {
              DecrementTrackerHandler(props);
            }}
          >
            Decrement Tracker -
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
          value={count.data.value}
          amount={count.data.amount}
          metric={count.data.metric}
          trackable={count.data.trackable}
        />
      ))}
    </ul>
  );
}

export { CounterList, CurrentPet };
