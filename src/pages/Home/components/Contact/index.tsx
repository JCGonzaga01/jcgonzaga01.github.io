import React, { useRef } from "react";
import styles from "./Contact.scss";

const Contact: React.FC = () => {
  const formRef = useRef(null);

  return (
    <div id={"contactDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Contact"}</span>
        </div>
        <div className={styles.details}>
          {/* <form ref={formRef}>
            <div>
              <div>
                <span>Name</span>
                <input type={"text"} placeholder={""} />
              </div>
              <div>
                <span>Email</span>
                <input type={"email"} placeholder={""} />
              </div>
            </div>
            <div>message form here..</div>
          </form> */}
          <div className={styles.contactInfo}> Contact Info</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
