import React from "react";
import assets from "assets";
import { Button } from "../_common";
import { componentBG } from "constants/_common";
import { skillsDetails } from "constants/skills";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./Skills.scss";

const Skills: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport("skillsDetailsWrapperDivId", 400);

  return (
    <div
      id={"skillsDivId"}
      className={styles.wrapper}
      style={{
        background: `url(${componentBG.skills}) center center / cover no-repeat fixed`,
      }}
    >
      {deviceType !== "pc" && (
        <div
          className={styles.skillsBG}
          style={{
            background: `url(${componentBG.skills}) center bottom / cover no-repeat fixed`,
          }}
        />
      )}
      <div
        id={"skillsDetailsWrapperDivId"}
        className={classNames(
          styles.skillsDetailsWrapper,
          deviceType === "pc" ? (isShowDetails ? styles.showDetails : styles.hideDetails) : ""
        )}
      >
        <div className={styles.skillsDetails}>
          <div>
            <span>{skillsDetails.title}</span>
          </div>
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
          <Button
            handleOnClick={() => {
              alert("This section is under construction. Check back soon");
            }}
            title={"View skills rating"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
