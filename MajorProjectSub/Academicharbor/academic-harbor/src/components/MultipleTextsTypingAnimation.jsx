import React from "react";
import styles from "./MultipleTextsTypingAnimation.module.css";

function MultipleTextsTypingAnimation({ darkMode, setDarkMode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.static}>
        <span className={darkMode ? "dark" : " "}>We've</span>
      </div>
      <span className={darkMode ? styles.darkBack : " "}>
        <ul className={styles.dynamic}>
          <li>
            <span>Programming</span>
          </li>
          <li>
            <span>Engineering</span>
          </li>
          <li>
            <span>JeeMains</span>
          </li>
          <li>
            <span>UPSC</span>
          </li>
          <li>
            <span>YouTubePlayLists</span>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default MultipleTextsTypingAnimation;