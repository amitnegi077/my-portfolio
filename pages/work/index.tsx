import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ibm } from "..";
import styles from "../../styles/Work.module.css";

const recentWorks = [
  {
    id: 1,
    name: "Metalaunch Website",
    shortDescription:
      "Metalaunch website listing showcasing upcoming projects, token utilities and partners.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis. Cumque quod, esse natus enim voluptate maiores fugit facilis laborum facere ut laboriosam. Necessitatibus velit facilis ipsa corrupti.",
    posterImg: "/images/metalaunch.png",
    websiteLink: "https://metalaunch.io/",
  },
  {
    id: 2,
    name: "Metalaunch App",
    shortDescription:
      "IDO Launchpad app where you can whitelist and participate in token sales using metamask wallet.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur iusto veritatis. Cumque quod, esse natus enim voluptate maiores fugit facilis laborum facere ut laboriosam. Necessitatibus velit facilis ipsa corrupti.",
    posterImg: "/images/app-metalaunch.png",
    websiteLink: "https://app.metalaunch.io/",
  },
  {
    id: 3,
    name: "Asvarium Website",
    shortDescription:
      "Website showcasing nft utilities and upcoming INO Launchpad platform and it's utilities ",
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
        I am proud to have worked on a wide range of projects throughout my
        career, and I am excited to share some of my best work with you. <br />
        <br />
        Here are some of the projects I have worked on recently.
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
              <Link
                href={item.websiteLink}
                target="_blank"
                rel="noreferrer"
                style={{ display: "contents" }}
              >
                <button className={`${styles.knowMoreBtn} ${ibm.className}`}>
                  Visit Site
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
