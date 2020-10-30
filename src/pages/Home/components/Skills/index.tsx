import React from "react";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import styles from "./Skills.scss";

const Skills: React.FC = () => {
  const deviceType = useDeviceType();

  return (
    <div id={"skillsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.skillsBG}
          style={{
            background: `url(${assets.skillsBG}) ${
              deviceType !== "pc" ? "bottom" : "center center"
            } / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div className={styles.skillsDetailsWrapper}>
          <div className={styles.skillsDetails}>
            <div>
              <span>Skills</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
