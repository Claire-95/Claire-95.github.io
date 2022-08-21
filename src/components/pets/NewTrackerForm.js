import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";

function NewTrackerForm(props) {
  const urlId = window.location.pathname.split("/").pop();

  const trackableInputRef = useRef();
  const metricInputRef = useRef();
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTrackable = trackableInputRef.current.value;
    const enteredMetric = metricInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const thisPetId = urlId;

    const counterData = {
      trackable: enteredTrackable,
      metric: enteredMetric,
      amount: enteredAmount,
      linkedPet: thisPetId,
    };
    props.onAddCounter(counterData);

    trackableInputRef.current.value = "";
    metricInputRef.current.value = "";
    amountInputRef.current.value = "";
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="trackable">
            What would you like to track? (e.g., food)
          </label>
          <input type="text" required id="trackable" ref={trackableInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="metric">
            What metric would you like to use? (e.g., tins)
          </label>
          <input type="text" required id="metric" ref={metricInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">
            How many of the above metric are you aiming for in a 24 hour period?{" "}
          </label>
          <input type="text" required id="amount" ref={amountInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Tracker</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTrackerForm;
