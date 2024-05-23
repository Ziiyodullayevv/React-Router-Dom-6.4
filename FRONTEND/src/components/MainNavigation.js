import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const active = ({isActive}) => isActive ? classes.active : undefined;
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={active} to={'/'} end>Home</NavLink>
          </li>
          <li>
            <NavLink className={active} to={'events'}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
