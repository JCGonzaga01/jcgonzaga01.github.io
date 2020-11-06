import React, { useEffect, useState } from "react";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import { Button } from "components";
import styles from "./AboutMe.scss";

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const [isShowDetails, setIsShowDetails] = useState(false);

  useEffect(() => {
    const scrolling = () => {
      const detailsEl = document.getElementById("aboutMeDetailsWrapperDivId");
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
        <div
          id={"aboutMeDetailsWrapperDivId"}
          className={classNames(
            styles.aboutMeDetailsWrapper,
            deviceType === "pc" ? (isShowDetails ? styles.showDetails : styles.hideDetails) : ""
          )}
        >
          <div className={styles.aboutMeDetails}>
            <div>
              <span>{"About Me"}</span>
            </div>
            <div className={styles.aboutMeListWrapper}>
              <div>
                <div className={styles.aboutMeList}>
                  <img src={assets.education} alt={"Education"} />
                  <div className={styles.title}>{"Education"}</div>
                  <div className={styles.detail}>
                    {
                      "Graduated Bachelor of Science in Computer Science at Polytechnic University of the Philippines"
                    }
                  </div>
                </div>
                <div className={styles.aboutMeList}>
                  <img src={assets.working} alt={"Work"} />
                  <div className={styles.title}>{"Work"}</div>
                  <div className={styles.detail}>
                    {"Currently work as a Web Developer in Finastra Philippines, Inc."}
                  </div>
                </div>
                <div className={styles.aboutMeList}>
                  <img src={assets.guitar} alt={"Guitar"} />
                  <div className={styles.title}>{"Who am i?"}</div>
                  <div className={styles.detail}>
                    {"I am just a simple guy who loves to play and learn musical instruments"}
                  </div>
                </div>
              </div>
            </div>
            <Button
              className={styles.custonButton}
              handleOnClick={() => {}}
              title={"Wanna know me more ?"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
