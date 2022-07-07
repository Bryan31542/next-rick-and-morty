import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles["app-nav"]}>
      <div className={styles["title-bg"]}>
        <Link href="/">
          <p className={styles.title}>
            {" "}
            <span>Rick and Morty </span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
