import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <img
          src="/src/assets/zaplist-favicon.png"
          alt="Zaplist Logo"
          className={classes.logo}
        />
        <span className={classes.title}>Zaplist</span>
      </div>

      <Link to="/create-todo" className={classes.button}>
        + New Post
      </Link>
    </header>
  );
}

export default MainHeader;
