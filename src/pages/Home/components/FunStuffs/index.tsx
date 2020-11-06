import React from "react";
import { Slider } from "components";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Fun Stuffs"}</span>
        </div>
        <Slider className={styles.details} />
      </div>
    </div>
  );
};
export default FunStuffs;
