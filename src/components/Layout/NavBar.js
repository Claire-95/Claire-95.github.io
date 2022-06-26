import { Outlet, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.logo}>Planimals</div>
        <ul>
          <li>
            <Link to="/all-pets">All Pets</Link>
          </li>
          <li>
            <Link to="/new-pet">Add New Pet</Link>
          </li>
          <li>
            <Link to="/fed-pets">Fed Pets</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In/Sign Out</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  );
};

export default NavBar;
