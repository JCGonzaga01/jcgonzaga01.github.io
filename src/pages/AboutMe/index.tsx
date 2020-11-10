import React, { useEffect } from "react";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <div className={styles.wrapper}>About Me Page</div>;
};

export default AboutMe;
