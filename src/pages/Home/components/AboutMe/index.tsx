import React from "react";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.aboutMeBG}
          style={{
            background: `url(${assets.aboutMeBG}) ${
              deviceType !== "pc" ? "top" : "center center"
            } / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div className={styles.aboutMeDetailsWrapper}>
          <div className={styles.aboutMeDetails}>
            <div>
              <span>About Me</span>
            </div>
            <div>
              <div className={styles.aboutMeList}>
                <img src={assets.education} alt={"Education"} />
                <div className={styles.listTitle}>Education</div>
                <div className={styles.listDetail}>
                  Graduated Bachelor of Science in Computer Science at Polytechnic University of the
                  Philippines
                </div>
              </div>
              <div className={styles.aboutMeList}>
                <img src={assets.working} alt={"Work"} />
                <div className={styles.listTitle}>Work</div>
                <div className={styles.listDetail}>
                  Currently working as Web Developer in Finastra Philippines, Inc.
                </div>
              </div>
              <div className={styles.aboutMeList}>
                <img src={assets.guitar} alt={"Guitar"} />
                <div className={styles.listTitle}>Who am i?</div>
                <div className={styles.listDetail}>
                  I am a simple guy who loves to play musical instrument
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
