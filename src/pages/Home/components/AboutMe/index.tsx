import React from "react";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import { Button } from "components";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();

  return (
    <div id={"aboutMeDivId"} className={styles.wrapper}>
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
            <div className={styles.aboutMeListWrapper}>
              <div className={styles.aboutMeList}>
                <img src={assets.education} alt={"Education"} />
                <div className={styles.listTitle}>Education</div>
                <div className={styles.listDetail}>
                  {
                    "Graduated Bachelor of Science in Computer Science at Polytechnic University of the Philippines"
                  }
                </div>
              </div>
              <div className={styles.aboutMeList}>
                <img src={assets.working} alt={"Work"} />
                <div className={styles.listTitle}>Work</div>
                <div className={styles.listDetail}>
                  {"Currently work as a Web Developer in Finastra Philippines, Inc."}
                </div>
              </div>
              <div className={styles.aboutMeList}>
                <img src={assets.guitar} alt={"Guitar"} />
                <div className={styles.listTitle}>Who am i?</div>
                <div className={styles.listDetail}>
                  {"I am just a simple guy who loves to play and learn musical instruments"}
                </div>
              </div>
            </div>
            <Button handleOnClick={() => {}} title={"Wanna know me more ?"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
