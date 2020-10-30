import React from "react";
import { classNames } from "helpers/functions";
import styles from "./Button.scss";

type Props = {
  handleOnClick: () => void;
  title: string;
  className?: string;
};

const Button: React.FC<Props> = ({ handleOnClick, title, className = "" }) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <div onClick={handleOnClick}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
