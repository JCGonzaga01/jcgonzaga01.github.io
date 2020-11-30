import React, { FormEvent } from "react";
import styles from "./Card.scss";

type Props = {
  title: string;
  banner: string;
  url: string;
};

const Card: React.FC<Props> = ({ title, banner, url }) => {
  return (
    <div className={styles.wrapper}>
      <a href={url} target={"_self"} rel={"noreferrer"}>
        <div className={styles.banner}>
          <img src={banner} alt={title} />
        </div>
      </a>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
