import { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { RefAttributes, useRef } from "react";
import { ibm } from "..";
import styles from "../../styles/Contact.module.css";
import Image from "next/image";

function Contact() {
  const formRef = useRef(null);
  const [sentSuccess, setSentSuccess] = useState(false);

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
      .then((res) => setSentSuccess(true))
      .catch((error) => console.log("error", error));
  };
  return (
    <section className={`${styles.contact} ${ibm.className}`}>
      <div className={styles.main}>
        <h1>Get In Touch</h1>
        <p>
          Thank you for visiting my portfolio website! If you have any questions
          or would like to get in touch with me, please feel free to reach out
          using the following contact details:
        </p>
        <ul className={styles.list}>
          <a href="mailto:amitn.dev@gmail.com" target="_blank" rel="noreferrer">
            <li>
              Email: <b>amitn.dev@gmail.com</b>
            </li>
          </a>
          <a href="tel:+919911288428" target="_blank" rel="noreferrer">
            <li>
              Contact: <b>+919354059759</b>
            </li>
          </a>
        </ul>
        <p>
          Alternatively, you can use the contact form below to send me a message
          directly. I'll do my best to respond to your inquiry as soon as
          possible. Thank you for your interest in my work and I look forward to
          hearing from you!
        </p>
      </div>

      <div className={styles.formContainer}>
        {sentSuccess ? (
          <div className={styles.successContainer}>
            <Image
              className={styles.checkImg}
              src="/icons/check1.svg"
              alt="success icon"
              width={80}
              height={80}
            />
            <h1>Success</h1>
            <p>Email sent. I'll get back to you soon!</p>
            <button className={styles.submitButton}>Go to Home</button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formItem}>
              <div className={styles.labelContainer}>
                <label htmlFor="from_name">Name</label>
                <span className={styles.required}>*</span>
              </div>
              <input
                required
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Enter your name"
              />
            </div>
            <div className={styles.formItem}>
              <div className={styles.labelContainer}>
                <label htmlFor="from_email">Email</label>
                <span className={styles.required}>*</span>
              </div>
              <input
                required
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.formItem}>
              <div className={styles.labelContainer}>
                <label htmlFor="message">Message</label>
                <span className={styles.required}>*</span>
              </div>
              <textarea
                required
                id="message"
                name="message"
                //   cols="30"
                rows={10}
                placeholder="Write your message"
              />
            </div>
            <button className={`${styles.submitButton} ${ibm.className}`}>
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
