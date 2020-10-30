import React from "react";
import { useDeviceType } from "helpers/customHooks";
import assets from "assets";
import styles from "./Banner.scss";

const Banner: React.FC = () => {
  const deviceType = useDeviceType();

  const handleGetStartedClick = () => {
    const aboutMeEL = document.getElementById("aboutMeDivId");
    aboutMeEL?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.bannerBG}
          style={{
            background: `url(${assets.bannerBG}) center center / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div className={styles.bannerTextWrapper}>
          <div className={styles.bannerTextContainer}>
            <div>John Christopher Gonzaga</div>
            <div>A Web Developer who loves:</div>
            <div>
              <span className={styles.textWithImage}>
                <img src={assets.biking} alt={"Biking"} />
                Biking,
              </span>
              <span className={styles.textWithImage}>
                <img src={assets.running} alt={"Running"} />
                Running,
              </span>
              <span className={styles.textWithImage}>
                &nbsp; &&
                <img src={assets.musicNote1} alt={"Music Note 1"} />
                Playing musical instruments
              </span>
            </div>
            <div>
              <div onClick={handleGetStartedClick}>
                <span>Get Started</span>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
