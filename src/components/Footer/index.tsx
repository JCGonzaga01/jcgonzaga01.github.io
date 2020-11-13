import React from "react";
import assets from "assets";
import styles from "./Footer.scss";

const Footer: React.FC = () => {
  const handleGithubClick = () => window.open("https://github.com/JCGonzaga01");

  const handleLinkedinClick = () => window.open("https://www.linkedin.com/in/jc-gonzaga/");

  const handleEmailClick = () => window.open("mailto:gonzaga.jc1993@gmail.com");

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={assets.github} alt={"Github"} onClick={handleGithubClick} />
        <img src={assets.linkedin} alt={"LinkedIn"} onClick={handleLinkedinClick} />
        <img src={assets.email} alt={"Email"} onClick={handleEmailClick} />
      </div>
      <div className={styles.myName}>© John Christopher Gonzaga</div>
    </div>
  );
};

export default Footer;
