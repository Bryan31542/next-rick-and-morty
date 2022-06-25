import Head from "next/head";
import Image from "next/image";
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
            Click here to see all the{" "}
            <a className={styles.url_blue} href="/characters">
              characters
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
