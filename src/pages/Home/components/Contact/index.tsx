import React from "react";
import styles from "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div id={"contactDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Contact"}</span>
        </div>
        <div>Details here...</div>
      </div>
    </div>
  );
};

export default Contact;
