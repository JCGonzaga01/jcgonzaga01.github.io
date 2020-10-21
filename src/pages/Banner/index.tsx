import React from "react";
import { useDeviceType } from "helpers/customHooks";
import bannerImg from "assets/banner.jpg";
import styles from "./Banner.scss";

const Banner: React.FC = () => {
  const deviceType = useDeviceType();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.bannerImg}
          style={{
            background: `url(${bannerImg}) center center / cover no-repeat`,
            // Parallex is not supported in tl and sp
            backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
          }}
        />
        <div className={styles.bannerText}>John Christopher Gonzaga</div>
      </div>
    </div>
  );
};

export default Banner;
