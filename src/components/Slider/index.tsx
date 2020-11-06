import React, { useState } from "react";
import assets from "assets";
import { classNames } from "helpers/functions";
import { Card } from "components";
import styles from "./Slider.scss";

type Props = {
  className?: string;
  cardList: Array<{ banner: string; title: string }>;
};

const Slider: React.FC<Props> = ({ className = "", cardList }) => {
  const [itemTranslateX, setItemTranslateX] = useState(0);

  const handleOnClickLeftBtn = () => {
    setItemTranslateX(itemTranslateX - 200);
  };

  const handleOnClickRightBtn = () => {
    setItemTranslateX(itemTranslateX + 200);
  };

  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={classNames(styles.leftBtn, styles.arrowBtn)} onClick={handleOnClickLeftBtn}>
        <img src={assets.leftArrow} alt={"Left Button"} />
      </div>
      <div className={styles.leftBtnShadow} />
      <div className={styles.sliderItemsWrapper}>
        <div
          className={styles.sliderItemsContainer}
          style={{ transform: `translateX(${itemTranslateX}px)` }}
        >
          {cardList.map((item) => (
            <Card banner={item.banner} title={item.title} />
          ))}
        </div>
      </div>
      <div className={styles.rightBtnShadow} />
      <div className={classNames(styles.rightBtn, styles.arrowBtn)} onClick={handleOnClickRightBtn}>
        <img src={assets.rightArrow} alt={"Right Button"} />
      </div>
    </div>
  );
};

export default Slider;
