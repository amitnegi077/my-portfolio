import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ibm } from "..";
import styles from "../../styles/Testimonials.module.css";
function index() {
  return (
    <div className={`${styles.conatiner} ${ibm.className}`}>
      <h1>Testimonials</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
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
