import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";
import { UpdateCounter } from "../../services/counter-service";

//Produces content for pet cards

function DeleteTrackerHandler(counterData) {
  DeleteCounter(counterData.id);
}

function IncrementTrackerHandler(counterData) {
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
        <div className={classes.control}>
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
            Delete {props.trackable} Tracker
          </button>
          <button
            className={classes.button}
            onClick={() => {
              IncrementTrackerHandler(props);
            }}
          >
            Add {props.metric} +
          </button>
          <button
            className={classes.button}
            onClick={() => {
              DecrementTrackerHandler(props);
            }}
          >
            Remove {props.metric} -
          </button>
        </div>
      </Card>
    </li>
  );
}

function CounterList(props) {
  var petId = "/add-tracker/" + window.location.pathname.split("/").pop();
  return (
    <>
      <ul className={classes.list}>
        {props.counters.map((liveCounters) => (
          <CurrentPet
            key={liveCounters.id}
            id={liveCounters.id}
            linkedPet={liveCounters.data.linkedPet}
            value={liveCounters.data.value}
            amount={liveCounters.data.amount}
            metric={liveCounters.data.metric}
            trackable={liveCounters.data.trackable}
          />
        ))}

        <a className={classes.button} href={petId}>
          Add Tracker +
        </a>
      </ul>
    </>
  );
}

export { CounterList };
