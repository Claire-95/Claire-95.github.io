import { useState } from "react";
import styles from "../components/styles/AddNewPet.css";

const AddNewPet = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("Pet added");
  };

  return (
    <div className={styles}>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={inputs.lastName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={inputs.species || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewPet;
