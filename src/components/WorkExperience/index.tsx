import React, { useEffect, useState } from "react";
import assets from "assets";
import { componentBG } from "constants/_common";
import { workExpDetails } from "constants/workExperience";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./WorkExperience.scss";

const WorkExperience: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport("workExpDetailsWrapperDivId", 400);

  const handleLinkedinClick = () => window.open("https://www.linkedin.com/in/jc-gonzaga/");

  return (
    <div id={"workExpDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.workExpBG}
          style={{
            background: `url(${componentBG.workExp}) ${
              deviceType !== "pc" ? "top" : "center center"
            } / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div
          id={"workExpDetailsWrapperDivId"}
          className={classNames(
            styles.workExpDetailsWrapper,
            deviceType === "pc" ? (isShowDetails ? styles.showDetails : styles.hideDetails) : ""
          )}
        >
          <div className={styles.workExpDetails}>
            <div>
              <span>{workExpDetails.title}</span>
            </div>
            <div className={styles.workExpListWrapper}>
              {workExpDetails.details.map((item) => (
                <div key={item.title} className={styles.workExpList}>
                  <img src={item.icon} alt={item.title} />
                  <div className={styles.detail}>
                    {item.records.map((record, idx) => (
                      <div key={`${idx}-${record.title}`}>
                        <div>{record.title}</div>
                        <li>{record.description}</li>
                        {idx + 1 < item.records.length && record.title && <br />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.linkedin}>
              <span>Click</span>
              <img src={assets.linkedin} alt={"LinkedIn"} onClick={handleLinkedinClick} />
              <span>for more details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
