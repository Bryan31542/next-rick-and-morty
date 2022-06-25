import React from "react";
import styles from "../styles/Card.module.css";
import { HeartIcon } from "@heroicons/react/solid";

const Character = ({ character = [] }) => {
  return (
    <div className={styles["character-container"]}>
      {character.map((item, index) => (
        <div key={index} className={styles["character-card"]}>
          <div className={styles.card}>
            <div className={styles["card-image"]}>
              <img className={styles.img} src={item.image} alt="" />
            </div>
            <div className={styles["card-body"]}>
              <div className={styles["card-main-info"]}>
                <h2 className={styles["card-title"]}>{item.name}</h2>
                <div className={styles.status}>
                  {item.status === "Alive" ? (
                    <HeartIcon className={styles.alive} />
                  ) : (
                    <HeartIcon className={styles["heart-icon"]} />
                  )}
                  <p className={styles["card-status"]}>
                    {item.status} - {item.species}
                  </p>
                </div>
              </div>
              <h5 className={styles["card-location-head"]}>
                Last know location:
              </h5>
              <p className={styles["card-location-text"]}>
                {item.location.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
