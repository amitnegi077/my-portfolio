import Image from "next/image";
import React from "react";
import { ibm } from "..";
import styles from "../../styles/Work.module.css";

const recentWorks = [
  {
    id: 1,
    name: "Metalaunch Website",
    shortDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis. Cumque quod, esse natus enim voluptate maiores fugit facilis laborum facere ut laboriosam. Necessitatibus velit facilis ipsa corrupti.",
    posterImg: "/images/metalaunch.png",
    websiteLink: "https://metalaunch.io/",
  },
  {
    id: 2,
    name: "Metalaunch App",
    shortDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis. Cumque quod, esse natus enim voluptate maiores fugit facilis laborum facere ut laboriosam. Necessitatibus velit facilis ipsa corrupti.",
    posterImg: "/images/app-metalaunch.png",
    websiteLink: "https://app.metalaunch.io/",
  },
  {
    id: 3,
    name: "Asvarium Website",
    shortDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis. Cumque quod, esse natus enim voluptate maiores fugit facilis laborum facere ut laboriosam. Necessitatibus velit facilis ipsa corrupti.",
    posterImg: "/images/asvarium.png",
    websiteLink: "https://asvarium.com/",
  },
];

function index() {
  return (
    <div className={`${styles.container} ${ibm.className}`}>
      <h1>Recent Work</h1>
      <p>
        Solving user & business problems since last 15+ years. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      <div className={styles.cardContainer}>
        {recentWorks.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              className={styles.bannerImg}
              src={item.posterImg}
              alt="banner"
              width={450}
              height={300}
            />
            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>
              <button className={`${styles.knowMoreBtn} ${ibm.className}`}>
                Visit Site
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
