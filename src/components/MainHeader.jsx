import classes from "./MainHeader.module.css";

function MainHeader({ onCreatePost }) {
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

      <button className={classes.button} onClick={onCreatePost}>
        + New Post
      </button>
    </header>
  );
}

export default MainHeader;
