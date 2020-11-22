import React from "react";
import { footerDetails } from "constants/footer";
import styles from "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          {footerDetails.linkItems.map((item, idx) => (
            <a key={`${idx}-${item.name}`} href={item.link} target={item.target} rel={"noreferrer"}>
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
        <div className={styles.myName}>{footerDetails.name}</div>
      </div>
    </div>
  );
};

export default Footer;
