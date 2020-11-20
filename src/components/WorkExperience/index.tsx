import React from "react";
import assets from "assets";
import { workExpDetails } from "constants/workExperience";
import { useDeviceType, useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import styles from "./WorkExperience.scss";

const WorkExperience: React.FC = () => {
  const deviceType = useDeviceType();
  const isShowDetails = useVisibleInViewport(
    "workExpDetailsWrapperDivId",
    deviceType === "sp" ? 200 : 400
  );

  return (
    <div
      id={"workExpDivId"}
      className={styles.wrapper}
      style={{
        background: `url(${assets.workExpBG}) left center / cover no-repeat fixed`,
      }}
    >
      {deviceType === "sp" && (
        <div
          className={styles.workExpBG}
          style={{
            background: `url(${assets.workExpBG}) left center / cover no-repeat fixed`,
          }}
        />
      )}
      <div
        id={"workExpDetailsWrapperDivId"}
        className={classNames(
          styles.workExpDetailsWrapper,
          isShowDetails
            ? deviceType === "sp"
              ? styles.showFadeUp
              : styles.showDetails
            : styles.hideDetails
        )}
      >
        <div className={styles.workExpDetails}>
          <div>{workExpDetails.title}</div>
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
            <a href={workExpDetails.linkedInURL} target={"_blank"} rel={"noreferrer"}>
              <img src={assets.linkedin} alt={"LinkedIn"} />
            </a>
            <span>for more details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
