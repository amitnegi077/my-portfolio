import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ibm } from "..";
import styles from "../../styles/Testimonials.module.css";
function index() {
  return (
    <div className={`${styles.conatiner} ${ibm.className}`}>
      <h1>Testimonials</h1>
      <p>
        I believe that a good developer is not only one who writes good code but
        also one who is easy to work with, communicative and has a positive
        attitude. These testimonials will give you a glimpse of my work ethics
        and how I interact with my team and clients.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className={styles.userContainer}>
            <FaUserCircle size="3em" color="#fff" />
            <span>Client Name</span>
          </div>
        </div>
        <div className={styles.card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className={styles.userContainer}>
            <FaUserCircle size="3em" color="#fff" />
            <span>Client Name</span>
          </div>
        </div>
        <div className={styles.card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className={styles.userContainer}>
            <FaUserCircle size="3em" color="#fff" />
            <span>Client Name</span>
          </div>
        </div>
        <div className={styles.card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className={styles.userContainer}>
            <FaUserCircle size="3em" color="#fff" />
            <span>Client Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
