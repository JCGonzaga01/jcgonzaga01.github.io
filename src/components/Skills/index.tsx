import React from "react";
import assets from "assets";
import { Button } from "../_common";
import { skillsDetails } from "constants/skills";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Skills.scss";

const Skills: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport(
    "skillsDetailsWrapperDivId",
    deviceType === "sp" ? 200 : 400
  );

  const handleOnClickBtn = () => window.localStorage.setItem("infoType", skillsDetails.key);

  return (
    <div
      id={"skillsDivId"}
      className={styles.wrapper}
      style={{
        background: `url(${assets.skillsBG}) center center / cover no-repeat`,
        // Parallex is not supported in tl and sp
        backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
      }}
    >
      {deviceType === "sp" && (
        <div
          className={styles.skillsBG}
          style={{
            background: `url(${assets.skillsBG}) center bottom / cover no-repeat`,
          }}
        />
      )}
      <div
        id={"skillsDetailsWrapperDivId"}
        className={classNames(
          styles.skillsDetailsWrapper,
          isShowDetails
            ? deviceType === "sp"
              ? styles.showFadeUp
              : styles.showDetails
            : styles.hideDetails
        )}
      >
        <div className={styles.skillsDetails}>
          <div>{skillsDetails.title}</div>
          <div className={styles.skillsListWrapper}>
            <div className={styles.skillsListContainer}>
              {skillsDetails.details.map((item, idx) => (
                <div key={`${idx}-${item.title}`} className={styles.skillsList}>
                  <img src={item.icon} alt={item.title} />
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.detail}>{item.description}</div>
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
            <Button className={styles.custonButton} title={"View skills rating"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
