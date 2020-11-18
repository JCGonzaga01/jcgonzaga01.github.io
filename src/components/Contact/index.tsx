import React, { FormEvent, useRef, useState } from "react";
import { SnackBar } from "../_common";
import styles from "./Contact.scss";

const Contact: React.FC = () => {
  const formRef = useRef(null);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [snackBarData, setSnackBarData] = useState({
    isOpen: false,
    isSuccess: false,
    message: "",
  });

  const handleOnSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setIsInvalidEmail(false);
    let newSnackBarData = snackBarData;
    const form: any = formRef.current;
    const emailRx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const checkInvalidEmail = !emailRx.test(form["contactEmail"].value);

    if (checkInvalidEmail) {
      newSnackBarData = {
        isOpen: true,
        isSuccess: false,
        message: form["contactEmail"].value + " is not a valid email address.",
      };
      setIsInvalidEmail(true);
    } else {
      const formValues = {
        name: form["contactName"].value,
        email: form["contactEmail"].value,
        message: form["contactMessage"].value,
      };
      handleOnClickClear(e);
      newSnackBarData = {
        isOpen: true,
        isSuccess: true,
        message: "Message successfully sent!",
      };

      console.log(formValues);
    }
    setSnackBarData(newSnackBarData);
  };

  const handleOnClickClear = (e: FormEvent) => {
    e.preventDefault();
    setIsInvalidEmail(false);
    const form: any = formRef.current;
    const formfields = ["contactName", "contactEmail", "contactMessage"];
    formfields.forEach((item) => (form[item].value = ""));
  };

  const handleOnCloseSnackBar = () =>
    setSnackBarData({
      isOpen: false,
      isSuccess: false,
      message: "",
    });

  return (
    <div id={"contactDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>{"CONTACT"}</div>
        <div className={styles.details}>
          <form ref={formRef} onSubmit={handleOnSubmitForm}>
            <div className={styles.nameNemail}>
              <div className={styles.textField}>
                <span>{"Name"}</span>
                <input name={"contactName"} type={"text"} required />
              </div>
              <div className={styles.textField}>
                <span>{"Email"}</span>
                <input
                  className={isInvalidEmail ? styles.invalidEmailField : ""}
                  name={"contactEmail"}
                  type={"email"}
                  required
                />
              </div>
            </div>
            <div className={styles.message}>
              <span>{"Message"}</span>
              <textarea name={"contactMessage"} rows={8} style={{ resize: "none" }} required />
            </div>
            <div className={styles.btnContainer}>
              <button type={"submit"} className={styles.btnStyle}>
                {"Send Message"}
              </button>
              <button type={"button"} onClick={handleOnClickClear} className={styles.btnStyle}>
                {"Clear"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <SnackBar
        open={snackBarData.isOpen}
        message={snackBarData.message}
        isSuccess={snackBarData.isSuccess}
        onClose={handleOnCloseSnackBar}
      />
    </div>
  );
};

export default Contact;
