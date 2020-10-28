import React from "react";
import { useDeviceType } from "helpers/customHooks";
import assets from "assets";
import styles from "./Banner.scss";

const Banner: React.FC = () => {
  const deviceType = useDeviceType();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.bannerImg}
          style={{
            background: `url(${assets.bannerImg}) center center / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div className={styles.bannerTextWrapper}>
          <div className={styles.bannerTextContainer}>
            <div>John Christopher Gonzaga</div>
            <div>Web Developer</div>
            <div>Who am I?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
