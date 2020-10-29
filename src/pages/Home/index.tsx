import React from "react";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import styles from "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <AboutMe />
    </div>
  );
};

export default Home;
