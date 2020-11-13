import React from "react";
import assets from "assets";
import { Button } from "../_common";
import { componentBG } from "constants/_common";
import { aboutMeDetails } from "constants/aboutMe";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport("aboutMeDetailsWrapperDivId", 200);

  const handleOnClickKnowMeMore = () => alert("This section is currently under construction.");

  return (
    <div id={"aboutMeDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.aboutMeBG}
          style={{
            background: `url(${componentBG.aboutMe}) ${
              deviceType !== "pc" ? "top" : "center center"
            } / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div
          id={"aboutMeDetailsWrapperDivId"}
          className={classNames(
            styles.aboutMeDetailsWrapper,
            deviceType === "pc" ? (isShowDetails ? styles.showDetails : styles.hideDetails) : ""
          )}
        >
          <div className={styles.aboutMeDetails}>
            <div>
              <span>{aboutMeDetails.title}</span>
            </div>
            <div className={styles.aboutMeListWrapper}>
              <div>
                {aboutMeDetails.details.map((item) => (
                  <div key={item.title} className={styles.aboutMeList}>
                    <img src={item.icon} alt={item.title} />
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.detail}>{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className={styles.custonButton}
              handleOnClick={handleOnClickKnowMeMore}
              title={"Wanna know me more ?"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
