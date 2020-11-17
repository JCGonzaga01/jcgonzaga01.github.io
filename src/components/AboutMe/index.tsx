import React from "react";
import assets from "assets";
import { Button } from "../_common";
import { aboutMeDetails } from "constants/aboutMe";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport("aboutMeDetailsWrapperDivId", 200);

  return (
    <div
      id={"aboutMeDivId"}
      className={styles.wrapper}
      style={{
        background: `url(${assets.aboutMeBG}) center center / cover no-repeat fixed`,
      }}
    >
      {deviceType === "sp" && (
        <div
          className={styles.aboutMeBG}
          style={{
            background: `url(${assets.aboutMeBG}) center top / cover no-repeat fixed`,
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
                  <div className={styles.detail}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
          <a className={styles.link} href={"https://jcgonzaga01.github.io/info/"} target={"_self"}>
            <Button className={styles.custonButton} title={"Wanna know me more ?"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
