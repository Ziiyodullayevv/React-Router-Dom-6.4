import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // active link
  const active = ({ isActive }) => (isActive ? classes.active : undefined);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={active} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
