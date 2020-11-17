import React from "react";
import { classNames } from "helpers/functions";
import styles from "./Button.scss";

type Props = {
  handleOnClick?: () => void;
  title?: string;
  className?: string;
};

const Button: React.FC<Props> = ({
  children,
  handleOnClick = () => {},
  title = "",
  className = "",
}) => {
  return (
    <div className={classNames(className, styles.wrapper)}>
      <div onClick={handleOnClick}>{title !== "" ? <span>{title}</span> : children}</div>
    </div>
  );
};

export default Button;
