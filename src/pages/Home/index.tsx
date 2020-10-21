import React from "react";
import Banner from "../Banner";
import styles from "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
    </div>
  );
};

export default Home;
