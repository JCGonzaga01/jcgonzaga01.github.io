import React from "react";
import assets from "assets";
import { Slider } from "components";
import { travelList } from "constants/common";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Fun Stuffs"}</span>
        </div>
        <div className={styles.fsListWrapper}>
          <div className={styles.fsListTitle}>
            <img src={assets.travels} alt={"Travels"} />
            <span>{"Travels"}</span>
          </div>
          <Slider className={styles.details} cardList={travelList} />
        </div>
        <div className={styles.fsListWrapper}>
          <div className={styles.fsListTitle}>
            <img src={assets.fs_biking} alt={"Mountain Biking"} />
            <span>{"Mountain Biking"}</span>
          </div>
          <Slider className={styles.details} cardList={travelList} />
        </div>
      </div>
    </div>
  );
};
export default FunStuffs;