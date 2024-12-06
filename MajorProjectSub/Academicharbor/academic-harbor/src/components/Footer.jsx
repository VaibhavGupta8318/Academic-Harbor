import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa"; // Import social media icons from react-icons library

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <img src="Logo.png" alt="Website Logo" className={styles.logo} />

        <span className={styles.website_name}>Academic Harbor</span>
      </div>
      <div className={styles.footer_middle}>
        <span className="copyright">
          &copy; {new Date().getFullYear()} All rights reserved. Email :
          smmanmohan2000@gmail.com
        </span>
      </div>
      <div className={styles.footer_right}>
        <a href="https://github.com/manmohan-c0der" target="_blank">
          <FaGithub className="icon instagram" target="_blank" />
        </a>
        <a
          href="https://www.linkedin.com/in/manmohan-sharma-009403228/"
          target="_blank"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100063555143326&mibextid=PrwyjqcTLlksUAL4"
          target="_blank"
        >
          <FaFacebook className="icon facebook" target="_blank" />
        </a>
        <a
          href="https://www.instagram.com/the_coder_24/?utm_source=qr"
          target="_blank"
        >
          <FaInstagram className="icon twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
