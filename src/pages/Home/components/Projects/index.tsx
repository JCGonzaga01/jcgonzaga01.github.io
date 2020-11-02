import React from "react";
import styles from "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div id={"projectsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Projects"}</span>
        </div>
        <div>Details here...</div>
      </div>
    </div>
  );
};

export default Projects;
