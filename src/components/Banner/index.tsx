import React from "react";
import { componentBG } from "constants/_common";
import { bannerDetails } from "constants/banner";
import { useDeviceType } from "helpers/customHooks";
import styles from "./Banner.scss";

const Banner: React.FC = () => {
  const deviceType = useDeviceType();

  const handleGetStartedClick = () => {
    const aboutMeEL = document.getElementById("aboutMeDivId");
    if (aboutMeEL) {
      const curOffset = aboutMeEL.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: curOffset, behavior: "smooth" });
    }
  };

  return (
    <div
      id={"homeDivId"}
      className={styles.wrapper}
      style={{
        background: `url(${componentBG.banner}) center center / cover no-repeat`,
        // Parallex is not supported in tl and sp
        backgroundAttachment: deviceType === "pc" ? "fixed" : "initial",
      }}
    >
      <div className={styles.bannerTextWrapper}>
        <div className={styles.bannerTextContainer}>
          <div>
            <div>{bannerDetails.name}</div>
          </div>
          <div>{bannerDetails.description}</div>
          <div>
            {bannerDetails.hobbies.map((item, idx) => (
              <span key={`${idx}-${item.title}`} className={styles.textWithImage}>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </span>
            ))}
          </div>
          <div>
            <div onClick={handleGetStartedClick}>
              <span>{"Get Started"}</span>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
