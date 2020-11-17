import React from "react";
import assets from "assets";
import styles from "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <a href={"https://github.com/JCGonzaga01"} target={"_blank"}>
          <img src={assets.github} alt={"Github"} />
        </a>
        <a href={"https://www.linkedin.com/in/jc-gonzaga/"} target={"_blank"}>
          <img src={assets.linkedin} alt={"LinkedIn"} />
        </a>
        <a href={"mailto:gonzaga.jc1993@gmail.com"} target={"_blank"}>
          <img src={assets.email} alt={"Email"} />
        </a>
      </div>
      <div className={styles.myName}>© John Christopher Gonzaga</div>
    </div>
  );
};

export default Footer;
