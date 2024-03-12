import assets from "assets";
import { aboutMeDetails } from "constants/aboutMe";
import { workExpDetails } from "constants/workExperience";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import React from "react";
import { Button } from "../_common";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport("aboutMeDetailsWrapperDivId", 200);

  const handleOnClickBtn = () => window.localStorage.setItem("infoType", aboutMeDetails.key);

  return (
    <div
      id={"aboutMeDivId"}
      className={styles.wrapper}
      style={
        deviceType !== "sp"
          ? {
              background: `url(${assets.aboutMeBG}) left center / cover no-repeat`,
              // Parallex is not supported in tl and sp
              backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
            }
          : { backgroundColor: "#6375A6" }
      }
    >
      {deviceType === "sp" && (
        <div
          className={styles.aboutMeBG}
          style={{
            background: `url(${assets.aboutMeBG}) center top / cover no-repeat`,
          }}
        />
      )}
      <div
        id={"aboutMeDetailsWrapperDivId"}
        className={classNames(
          styles.aboutMeDetailsWrapper,
          isShowDetails ? styles.showDetails : styles.hideDetails
        )}
      >
        <div className={styles.aboutMeDetails}>
          <div>{aboutMeDetails.title}</div>
          <div className={styles.aboutMeListWrapper}>
            <div>
              {aboutMeDetails.details.map((item, idx) => (
                <div key={`${idx}-${item.title}`} className={styles.aboutMeList}>
                  <img src={item.icon} alt={item.title} />
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.detail}>
                    {item.description}
                    {item.isLinkedIn && (
                      <div className={styles.linkedin}>
                        <span>LinkedIn</span>
                        <a href={workExpDetails.linkedInURL} target={"_blank"} rel={"noreferrer"}>
                          <img src={assets.linkedin} alt={"LinkedIn"} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            className={styles.link}
            href={"/info"}
            target={"_self"}
            rel={"noreferrer"}
            onClick={handleOnClickBtn}
          >
            <Button className={styles.custonButton} title={"Wanna know me more ?"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
