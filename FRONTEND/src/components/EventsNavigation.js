import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";

function EventsNavigation() {
  const active = ({isActive}) => isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={active} to="/events" end>All Events</NavLink>
          </li>
          <li>
            <NavLink className={active} to="/events/new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
