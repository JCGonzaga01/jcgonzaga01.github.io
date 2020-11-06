import React from "react";
import styles from "./Card.scss";

type Props = {
  banner: string;
  title: string;
};

const Card: React.FC<Props> = ({ banner, title }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.banner} src={banner} alt={title} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
