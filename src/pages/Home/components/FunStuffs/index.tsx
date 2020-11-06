import React, { useState } from "react";
import assets, { linkImg } from "assets";
import { classNames } from "helpers/functions";
import styles from "./FunStuffs.scss";

const FunStuffs: React.FC = () => {
  const [itemTranslateX, setItemTranslateX] = useState(0);

  const handleOnClickLeftBtn = () => {
    setItemTranslateX(itemTranslateX - 200);
  };

  const handleOnClickRightBtn = () => {
    setItemTranslateX(itemTranslateX + 200);
  };

  return (
    <div id={"funStuffsDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Fun Stuffs"}</span>
        </div>
        <div className={styles.funStuffsDetailsWrapper}>
          <div
            className={classNames(styles.leftBtn, styles.arrowBtn)}
            onClick={handleOnClickLeftBtn}
          >
            <img src={assets.leftArrow} alt={"Left Button"} />
          </div>
          <div className={styles.leftBtnShadow} />
          <div className={styles.sliderItemsWrapper}>
            <div
              id={"fsTravelDivId"}
              className={styles.sliderItemsContainer}
              style={{ transform: `translateX(${itemTranslateX}px)` }}
            >
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
          <div className={styles.rightBtnShadow} />
          <div
            className={classNames(styles.rightBtn, styles.arrowBtn)}
            onClick={handleOnClickRightBtn}
          >
            <img src={assets.rightArrow} alt={"Right Button"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunStuffs;
