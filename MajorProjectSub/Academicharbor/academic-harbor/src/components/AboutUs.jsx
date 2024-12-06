import React from "react";
// import "./AboutUs.css";
// import sexy2.png from "./images/ai-agent.jpg"; // Example image paths
// import image.png from "./images/workspace.jpg";
// import mostCourse.png from "./images/courses.jpg";
// import sexy.png from "./images/community.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1>About Academic Harbor</h1>
        <p className="intro">
          Academic Harbor is an innovative online platform designed to cater to
          the diverse needs of students in their academic journey. Our goal is
          to provide a comprehensive hub that integrates various tools and
          features to enhance learning, productivity, and collaboration.
        </p>

        <div className="feature">
          <img src="first.png" alt="AI Agent" className="feature-image" />
          <div className="feature-content">
            <h2>Our Cutting-Edge AI Agent</h2>
            <p>
              At the heart of Academic Harbor is our state-of-the-art Google
              Gemini-based AI agent. This intelligent search tool understands
              complex queries and provides relevant, accurate information,
              acting as a virtual assistant to help you find the resources you
              need quickly and efficiently.
            </p>
          </div>
        </div>

        <div className="feature">
          <img
            src="second.png"
            alt="Online Workspace"
            className="feature-image"
          />
          <div className="feature-content">
            <h2>Seamless Online Workspace</h2>
            <p>
              Our platform includes a robust online workspace where you can
              store and organize your data. With features that allow you to
              download your data directly to your system, Academic Harbor
              ensures easy access and seamless integration with your workflow.
            </p>
          </div>
        </div>

        <div className="feature">
          <img
            src="third.png"
            alt="Trending Courses"
            className="feature-image"
          />
          <div className="feature-content">
            <h2>Discover Trending Courses</h2>
            <p>
              Our homepage features a curated list of trending courses, helping
              you discover new and popular topics in your field of study.
              Whether you're looking to expand your knowledge or find new areas
              of interest, Academic Harbor has you covered.
            </p>
          </div>
        </div>

        <div className="feature">
          <img src="sexy.png" alt="Community" className="feature-image" />
          <div className="feature-content">
            <h2>Join Our Community</h2>
            <p>
              Academic Harbor aims to foster a sense of community and
              collaboration among students. Join us today and take advantage of
              our comprehensive platform designed to enhance your learning
              experience and support your academic success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
