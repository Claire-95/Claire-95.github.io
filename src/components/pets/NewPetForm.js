import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPetForm.module.css";
import { useNavigate } from "react-router-dom";

function NewPetForm(props) {
  let navigate = useNavigate();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const speciesInputRef = useRef();
  const metricInputRef = useRef();
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredSpecies = speciesInputRef.current.value;
    const enteredMetric = metricInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;

    const petData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      species: enteredSpecies,
      metric: enteredMetric,
      amount: enteredAmount,
    };
    props.onAddPet(petData);

    firstNameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    speciesInputRef.current.value = "";
    metricInputRef.current.value = "";
    amountInputRef.current.value = "";

    navigate("/all-pets");
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" required id="firstName" ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" required id="lastName" ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="species">Species</label>
          <input type="text" required id="species" ref={speciesInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="metric">Metric</label>
          <input type="text" required id="metric" ref={metricInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input type="text" required id="amount" ref={amountInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Pet</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPetForm;
