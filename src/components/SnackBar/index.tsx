import React, { useEffect } from "react";
import assets from "assets";
import styles from "./SnackBar.scss";
import { classNames } from "helpers/functions";

type Props = {
  open: boolean;
  message: String;
  isSuccess: boolean;
  onClose: () => void;
};

const SnackBar: React.FC<Props> = ({ open, message, isSuccess, onClose }) => {
  useEffect(() => {
    const fadingTimer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(fadingTimer);
  }, [open, isSuccess]);

  const handleOnClickClose = () => onClose();

  return open ? (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.container,
          isSuccess ? styles.containerSuccess : styles.containerFailed
        )}
      >
        <img src={isSuccess ? assets.check : assets.error} alt={isSuccess ? "Success" : "Failed"} />
        <span>{message}</span>
        <div className={styles.closeBtn} onClick={handleOnClickClose}>
          <span />
          <span />
        </div>
      </div>
    </div>
  ) : null;
};

export default SnackBar;
