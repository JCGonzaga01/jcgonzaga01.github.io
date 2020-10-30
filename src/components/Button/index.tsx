import React from "react";
import styles from "./Button.scss";

type Props = {
  handleOnClick: () => void;
  title: string;
};

const Button: React.FC<Props> = ({ handleOnClick, title }) => {
  return (
    <div className={styles.wrapper}>
      <div onClick={handleOnClick}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
