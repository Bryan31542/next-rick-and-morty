import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles["background-img"]}>
      <div className={styles.container}>
        <Head>
          <title>Rick and Morty</title>
          <meta name="description" content="Rick and Morty" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Rick and Morty Web</h1>
          <p className={styles.url}>
            <Link className={styles.url_blue} href="/characters">
              <span className={styles.url_blue}>Click here </span>
            </Link>
            to see all the characters
          </p>
        </main>
      </div>
    </div>
  );
}
