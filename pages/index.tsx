import Head from "next/head";
import Image from "next/image";
import { IBM_Plex_Mono, Raleway } from "@next/font/google";
import styles from "../styles/Home.module.css";
import profilePic from "../public/Amit.jpg";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Amit Negi - Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${ibm.className}`}>
        <div className={styles.content}>
          <Image
            className={styles.profilePic}
            src={profilePic}
            alt="profile-pic"
            width={350}
            height={350}
          />
          <div className={styles.info}>
            <h1 className={raleway.className}>Amit Negi</h1>
            <p>
              Hello!👋 my name is Amit Negi and I am a Frontend Developer 👨‍💻
              with experience in software development and web development. I
              have a proven track record of delivering high-quality projects on
              time ⌛ and within budget.
              <br />
              <br /> I have worked on various projects like IDO Launchpad, INO
              Launchpad, Social Media & Recruiting Platform, and ATS which have
              given me a diverse set of skills and knowledge in the field. My
              technical expertise lies in React JS, Javascript, Redux, HTML,
              CSS. I hold a Master's degree in Computer Application 👨‍🎓 which
              provides me with a solid foundation in computer science and
              software development.
              <br />
              <br /> I am a dedicated professional with a passion for coding and
              a commitment to delivering top-notch results. I am a quick learner
              and always looking for new opportunities to improve my skills.
              <br />
              <br /> I am currently available for freelance opportunities and
              looking forward to working on projects that will allow me to
              utilize my skills and experience to deliver quality work.
            </p>
            <button className={`${styles.mainBtn} ${ibm.className}`}>
              Connect with me
            </button>
          </div>

          <div className={styles.workPartnersContainer}>
            <h3>Worked With</h3>
            <div className={styles.workPartners}>
              <div className={styles.box}>
                <h2>
                  <a
                    href="https://asvalabs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Asva Labs
                  </a>
                </h2>
              </div>
              <div className={styles.box}>
                <a
                  href="https://buidlerstribe.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Builders Tribe</h2>
                </a>
              </div>
              <div className={styles.box}>
                <a
                  href="https://www.ikonwork.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Ikonwork</h2>
                </a>
              </div>
              <div className={styles.box}>
                <a
                  href="https://rightvisionsecurity.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Right Vision Security</h2>
                </a>
              </div>
              <div className={styles.box}>
                <a
                  href="https://cliniker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Cliniker</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
