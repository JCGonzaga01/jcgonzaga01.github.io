import React from "react";
import assets from "assets";
import { Slider } from "../_common";
import { travelItems } from "constants/funStuffs";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>{"Fun Stuffs"}</div>
        <div className={styles.fsListWrapper}>
          <div className={styles.fsListTitle}>
            <img src={assets.travels} alt={"Travels"} />
            <span>{"Travels"}</span>
          </div>
          <Slider className={styles.details} cardList={travelItems} animate />
        </div>
      </div>
    </div>
  );
};
export default FunStuffs;
