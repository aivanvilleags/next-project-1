import React from "react";
import styles from "../styles/banner.module.css";

const Banner = ({ buttonText, handleOnBtnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee Shops</span>
        <span className={styles.title2}>near you!</span>
      </h1>
      <p className={styles.subtitle}>Discover your local choffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleOnBtnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
