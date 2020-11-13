import React, { useEffect, useState } from "react";
import assets from "assets";
import { componentBG } from "constants/common";
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
              <span>{"Work Experience"}</span>
            </div>
            <div className={styles.workExpListWrapper}>
              <div className={styles.workExpList}>
                <img src={assets.finastra} alt={"Finastra"} />
                <div className={styles.detail}>
                  <li>{"August 2020 ~ Present: Senior Web Engineer"}</li>
                </div>
              </div>
              <div className={styles.workExpList}>
                <img src={assets.accenture} alt={"Accenture"} />
                <div className={styles.detail}>
                  <div>{"Accenture Japan"}</div>
                  <li>{"July 2018 ~ Feb 2020: Senior Front End Developer"}</li>
                  <br />
                  <div>{"Accenture Philippines"}</div>
                  <li>{"July 2017 ~ June 2018: Front End Developer"}</li>
                </div>
              </div>

              <div className={styles.workExpList}>
                <img src={assets.jeonsoft} alt={"JeonSoft"} />
                <div className={styles.detail}>
                  <li>{"July 2015 ~ May 2017: Senior Software Engineer"}</li>
                  <li>{"July 2014 ~ July 2015: Software Engineer"}</li>
                </div>
              </div>
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
