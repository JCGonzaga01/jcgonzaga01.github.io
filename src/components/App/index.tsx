import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import WorkExperience from "../WorkExperience";
import Projects from "../Projects";
import FunStuffs from "../FunStuffs";
import Contact from "../Contact";
import Footer from "../Footer";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <Header />
          <Banner />
          <AboutMe />
          <Skills />
          <WorkExperience />
          <Projects />
          <FunStuffs />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
