import { validate } from "json-schema";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./Contact.scss";

const Contact: React.FC = () => {
  const formRef = useRef(null);
  const [validateEmail, setValidateEmail] = useState({ valid: true, email: "" });

  const handleOnSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setValidateEmail({ valid: true, email: "" });
    const form: any = formRef.current;
    const emailRx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const checkInvalidEmail = !emailRx.test(form["contactEmail"].value);

    if (checkInvalidEmail) setValidateEmail({ valid: false, email: form["contactEmail"].value });
    else {
      const formValues = {
        name: form["contactName"].value,
        email: form["contactEmail"].value,
        message: form["contactMessage"].value,
      };
      handleOnClickClear(e);

      console.log(formValues);
    }
  };

  const handleOnClickClear = (e: FormEvent) => {
    e.preventDefault();
    const form: any = formRef.current;
    const formfields = ["contactName", "contactEmail", "contactMessage"];
    formfields.forEach((item) => (form[item].value = ""));
  };

  return (
    <div id={"contactDivId"} className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <span>{"Contact"}</span>
        </div>
        <div className={styles.details}>
          {!validateEmail.valid && (
            <div className={styles.invalidForm}>
              <div>{`'${validateEmail.email}' is not a valid email address.`}</div>
            </div>
          )}
          <form ref={formRef} onSubmit={handleOnSubmitForm}>
            <div className={styles.nameNemail}>
              <div className={styles.textField}>
                <span>{"Name"}</span>
                <input name={"contactName"} type={"text"} required />
              </div>
              <div className={styles.textField}>
                <span>{"Email"}</span>
                <input name={"contactEmail"} type={"email"} required />
              </div>
            </div>
            <div className={styles.message}>
              <span>{"Message"}</span>
              <textarea name={"contactMessage"} rows={8} style={{ resize: "none" }} required />
            </div>
            <div className={styles.btnContainer}>
              <button type={"submit"}>{"Send Message"}</button>
              <button type={"button"} onClick={handleOnClickClear}>
                {"Clear"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
