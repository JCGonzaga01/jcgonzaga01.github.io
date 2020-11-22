import React from "react";
import { contactDetails } from "constants/contact";
import styles from "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div id={"contactDivId"} className={styles.wrapper}>
      <div className={styles.title}>{contactDetails.title}</div>
      <div className={styles.content}>
        <span>{contactDetails.details}</span>
        <a href={contactDetails.link} target={"_blank"} rel={"noreferrer"}>
          {contactDetails.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
