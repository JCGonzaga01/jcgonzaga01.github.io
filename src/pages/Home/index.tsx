import React from "react";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import FunStuffs from "./components/FunStuffs";
import Contact from "./components/Contact";
import styles from "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Projects />
      <FunStuffs />
      <Contact />
    </div>
  );
};

export default Home;
