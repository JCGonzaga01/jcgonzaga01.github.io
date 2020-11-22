import React from "react";
import assets from "assets";
import { Slider } from "../_common";
import { funStuffsDetails } from "constants/funStuffs";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>{funStuffsDetails.title}</div>
        <div className={styles.fsListWrapper}>
          {funStuffsDetails.details.map((detail, idx) => (
            <div key={`${idx}-${detail.name}`}>
              <div className={styles.fsListTitle}>
                <img src={detail.icon} alt={detail.name} />
                <span>{detail.name}</span>
              </div>
              <Slider className={styles.details} cardList={detail.items} animate />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FunStuffs;
