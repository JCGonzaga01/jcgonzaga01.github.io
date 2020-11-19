import React, { useState } from "react";
import assets from "assets";
import { useVisibleInViewport } from "helpers/customHooks";
import { classNames } from "helpers/functions";
import Card from "../Card";
import styles from "./Slider.scss";

type Props = {
  className?: string;
  cardList: Array<{ banner: string; title: string }>;
  animate?: boolean;
};

const Slider: React.FC<Props> = ({ className = "", cardList, animate = false }) => {
  const animateCard = useVisibleInViewport("sliderItemsDiv", 250);
  const [itemTranslateX, setItemTranslateX] = useState(0);

  const handleOnClickLeftBtn = () => {
    let newItemTranslateX = itemTranslateX;

    if (itemTranslateX >= -200) newItemTranslateX += 200;
    else newItemTranslateX += 230;

    if (newItemTranslateX > 0) setItemTranslateX(0);
    else setItemTranslateX(newItemTranslateX);
  };

  const handleOnClickRightBtn = () => {
    const sliderItemsEL = document.getElementById("sliderItemsDiv");

    if (sliderItemsEL) {
      const sliderItemsELWidth = sliderItemsEL.getBoundingClientRect().width;
      const childrenTotalWidth =
        sliderItemsEL.children[0].getBoundingClientRect().width * sliderItemsEL.children.length +
        30 * (sliderItemsEL.children.length - 1); // Margin-right computation.

      let newItemTranslateX = itemTranslateX;

      if (itemTranslateX > -200) newItemTranslateX -= 200;
      else newItemTranslateX -= 230;

      if (sliderItemsELWidth + Math.abs(newItemTranslateX) < childrenTotalWidth) {
        setItemTranslateX(newItemTranslateX);
      } else {
        const offsetWidth = sliderItemsELWidth + Math.abs(newItemTranslateX) - childrenTotalWidth;
        setItemTranslateX(newItemTranslateX + offsetWidth);
      }
    }
  };

  const handleOnClickBanner = () => {
    alert("This section is under construction. Check back soon.");
  };

  return (
    <div className={classNames(className, styles.wrapper)}>
      <div className={styles.arrowBtn} onClick={handleOnClickLeftBtn}>
        <img src={assets.leftArrow} alt={"Left Button"} />
      </div>
      <div className={styles.leftBtnShadow} />
      <div className={styles.sliderItemsWrapper}>
        <div
          id={"sliderItemsDiv"}
          className={styles.sliderItemsContainer}
          style={{ transform: `translateX(${itemTranslateX}px)` }}
        >
          {cardList.map((item, idx) => (
            <div
              key={`${idx}-${item.title}`}
              className={animate ? (animateCard ? styles.showDiv : styles.hideDiv) : styles.showDiv}
              style={{
                transition: `opacity 1s ease-in-out ${idx * 0.4}s`,
              }}
            >
              <Card banner={item.banner} title={item.title} onClickBanner={handleOnClickBanner} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightBtnShadow} />
      <div className={styles.arrowBtn} onClick={handleOnClickRightBtn}>
        <img src={assets.rightArrow} alt={"Right Button"} />
      </div>
    </div>
  );
};

export default Slider;
