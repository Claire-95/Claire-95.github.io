import Card from "../ui/Card";
import classes from "./Pet.module.css";

function Pet(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstName}</h3>
          <p>{props.lastName}</p>
          <p>{props.species}</p>
        </div>
      </Card>
    </li>
  );
}

export default Pet;
