import emailjs from "@emailjs/browser";
import React, { RefAttributes, useRef } from "react";
import { ibm } from "..";
import styles from "../../styles/Contact.module.css";

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentForm = formRef.current;
    if (currentForm === null) return;

    emailjs
      .sendForm(
        "service_44m78ad",
        "template_ie65gh5",
        currentForm,
        "jREpGfwsnJjQA3Qbr"
      )
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));
  };
  return (
    <section className={`${styles.contact} ${ibm.className}`}>
      <div className={styles.main}>
        <h1>Get In Touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>

      <div className={styles.formContainer}>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formItem}>
            <div className={styles.labelContainer}>
              <label htmlFor="">Email</label>
              <span className={styles.required}>*</span>
            </div>
            <input required type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Phone</label>
            <input type="tel" placeholder="Enter mobile number" />
          </div>
          <div className={styles.formItem}>
            <div className={styles.labelContainer}>
              <label htmlFor="">Message</label>
              <span className={styles.required}>*</span>
            </div>
            <textarea
              required
              name=""
              id=""
              //   cols="30"
              rows={10}
              placeholder="Write your message"
            />
          </div>
          <button className={`${styles.submitButton} ${ibm.className}`}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
