import React from "react";
import styles from "./Card.scss";

type Props = {
  banner: string;
  title: string;
  onClickBanner?: () => void;
};

const Card: React.FC<Props> = ({ banner, title, onClickBanner }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner} onClick={onClickBanner}>
        <img src={banner} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
