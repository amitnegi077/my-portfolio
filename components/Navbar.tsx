import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const { pathname } = useRouter();
  const { width } = useWindowSize();

  const [open, setOpen] = useState(false);
  const handleMobileMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (width >= 720) {
      setOpen(false);
    }
  }, [width]);

  return (
    <nav className={styles.navbar}>
      <ul className={open ? styles.expanded : styles.list}>
        <li>
          <Link className={pathname === "/" ? styles.activeLink : ""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/testimonials" ? styles.activeLink : ""}
            href="/testimonials"
          >
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/work" ? styles.activeLink : ""}
            href="/work"
          >
            Recent Work
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/contact" ? styles.activeLink : ""}
            href="/contact"
          >
            Get In Touch
          </Link>
        </li>
      </ul>

      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/amit-negi-78476a107/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/AmitNegi07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/amitnegi077"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      {open ? (
        <HiXMark className={styles.navMenuBtn} onClick={handleMobileMenu} />
      ) : (
        <FaBars className={styles.navMenuBtn} onClick={handleMobileMenu} />
      )}
    </nav>
  );
}

export default Navbar;
