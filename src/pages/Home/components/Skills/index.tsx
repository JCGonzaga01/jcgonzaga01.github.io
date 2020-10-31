import React, { useEffect, useState } from "react";
import assets from "assets";
import { Button, SkillGauge } from "components";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Skills.scss";

const Skills: React.FC = () => {
  const deviceType = useDeviceType();
  const [isShowDetails, setIsShowDetails] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      const detailsEl = document.getElementById("skillsDetailsWrapperDivId");
      if (
        !isShowDetails &&
        detailsEl &&
        detailsEl.getBoundingClientRect().top + 200 < window.innerHeight
      )
        setIsShowDetails(true);
    };
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

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
        <div
          id={"skillsDetailsWrapperDivId"}
          className={classNames(
            styles.skillsDetailsWrapper,
            deviceType === "pc" ? (isShowDetails ? styles.showDetails : styles.hideDetails) : ""
          )}
        >
          <div className={styles.skillsDetails}>
            <div>
              <span>{"Skills"}</span>
            </div>
            <div className={styles.skillsListWrapper}>
              <div className={styles.skillsListContainer}>
                <div className={styles.skillsList}>
                  <img src={assets.web} alt={"Web Coding"} />
                  <div className={styles.title}>{"Web"}</div>
                  <div className={styles.detail}>
                    {"Javascript, ReactJS, TypeScript, HTML, CSS, SCSS, Express, NodeJS, and more"}
                  </div>
                </div>
                <div className={styles.skillsList}>
                  <img src={assets.database} alt={"Database"} />
                  <div className={styles.title}>{"Database"}</div>
                  <div className={styles.detail}>
                    {"MySQL, PostgreSQL, NoSQL (Firebase, MongoDB, Redis)"}
                  </div>
                </div>
              </div>

              <div className={styles.skillsListContainer}>
                <div className={styles.skillsList}>
                  <img src={assets.scrum} alt={"Dev Methodologies"} />
                  <div className={styles.title}>{"Methodologies"}</div>
                  <div className={styles.detail}>
                    {"Scrum-Agile && SAFe (Scaled Agile Framework)"}
                  </div>
                </div>
                <div className={styles.skillsList}>
                  <img src={assets.otherTools} alt={"Other Tools"} />
                  <div className={styles.title}>{"Other Tools"}</div>
                  <div className={styles.detail}>
                    {"GIT, Docker, VS Code Remote Container, Webpack"}
                  </div>
                </div>
              </div>
            </div>
            <Button handleOnClick={() => {}} title={"View skills rating"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
