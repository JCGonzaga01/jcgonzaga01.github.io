import React from "react";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import styles from "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <AboutMe />
      <Skills />
      <WorkExperience />
    </div>
  );
};

export default Home;
