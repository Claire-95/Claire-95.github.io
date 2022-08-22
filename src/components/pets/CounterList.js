import classes from "./CounterList.module.css";
import Card from "../ui/Card";
import { DeleteCounter } from "../../services/counter-service";
import PetsIcon from "@mui/icons-material/Pets";

//Produces content for pet cards

function DeleteTrackerHandler(counterData) {
  console.log(counterData);
  DeleteCounter(counterData.id);
}

function CurrentPet(props) {
  return (
    <li>
      <Card>
        <div>
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
            Delete Tracker <PetsIcon />
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
