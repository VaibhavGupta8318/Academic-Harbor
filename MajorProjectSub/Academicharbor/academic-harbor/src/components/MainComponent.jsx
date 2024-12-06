import React from "react";
import MultipleTextsTypingAnimation from "./MultipleTextsTypingAnimation";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import "./MainComponent.css"; // Importing CSS file for styling

const MainComponent = ({ darkMode, setDarkMode, scrollToTrending }) => {
  return (
    <div className="main-container">
      <div className="content">
        <div className="text-content">
          <h1>
            All Your <span style={{ color: "#fc6d6d" }}> Academic Needs</span>
          </h1>
          <MultipleTextsTypingAnimation
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <span className={darkMode ? "text-content1" : ""}>
            <p>
              Academic Harbor is a Free Platform for the students designed to
              provide them with the best content available for them over the
              internet. As well as additional workspace and cloud storage free
              of cost for their convenience.
            </p>
          </span>
          <div className="buttons">
            <button className="btn1">
              <Link to="/Courses">Our Courses</Link>
            </button>
            <button onClick={scrollToTrending} className="btn2">
              Trending Courses
            </button>
          </div>
        </div>
        <div className="image-content">
          <img src="sexy2.png" alt="Attractive Image" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
