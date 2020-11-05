import React from "react";
import { linkImg } from "assets";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Fun Stuffs"}</span>
        </div>
        <div className={styles.funStuffsDetailsWrapper}>
          <div className={styles.card}>
            <img src={linkImg.naganotrip} alt={"Nagano Trip"} />
            <div>Nagano Trip</div>
          </div>
          <div className={styles.card}>
            <img src={linkImg.osakatrip} alt={"Osaka Trip"} />
            <div>Osaka Trip</div>
          </div>
          <div className={styles.card}>
            <img src={linkImg.sgtrip} alt={"Singapore Trip"} />
            <div>Singapore Trip</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunStuffs;
