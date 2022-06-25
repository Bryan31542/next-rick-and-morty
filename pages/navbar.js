import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles["app-nav"]}>
      <div className={styles["title-bg"]}>
        <a className={styles.title} href="/">
          Rick and Morty
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
