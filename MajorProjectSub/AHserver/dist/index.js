"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(
  "/images",
  express_1.default.static(path_1.default.join(__dirname, "../public/images"))
);
app.get("/", (req, res) => {
  console.log(path_1.default.join(__dirname, "../public"));
  const foodData = [
    {
      id: 1,
      title: "AI Course",
      description:
        "This is the best AI course Embark on an exciting journey into the world of artificial intelligence with our AI Course! Designed to equip you with the foundational and advanced skills needed in AI, this course covers everything from machine learning algorithms to neural networks and deep learning. Engage in hands-on projects that allow you to apply AI techniques to real-world problems, making your learning experience practical and impactful.",
      Image: "/images/ai.jpg",
    },
    {
      id: 2,
      title: "ML Course",
      description:
        "This is the best ML course Unlock the power of data with our Machine Learning (ML) Course! This comprehensive program is designed to teach you the essential techniques and algorithms used in machine learning to turn data into actionable insights. Through hands-on projects, you’ll learn to build predictive models, work with large datasets, and apply machine learning solutions to real-world problems",
      Image: "/images/ml.jpg",
    },
    {
      id: 16,
      title: "Prompt Engineering Course",
      description:
        "This is the best Prompt Engineering course Discover the power of efficient communication with AI through our Prompt Engineering Course! This course is designed to teach you the art of crafting precise and effective prompts to elicit accurate and useful responses from AI models. Dive into hands-on projects that help you understand how to optimize interactions with AI, making your applications smarter and more intuitive",
      Image: "/images/prompt.png",
    },
    {
      id: 3,
      title: "React Course",
      description:
        "This is the best React course Unlock the full potential of modern web development with our comprehensive React JS and Redux course! Dive into the world of cutting-edge technology by mastering React, the most popular JavaScript library for creating dynamic user interfaces, and Redux, the robust state management tool that ensures your applications run seamlessly.",
      Image: "/images/react.png",
    },

    {
      id: 4,
      title: "DSA With C++",
      description:
        "This is the best DSA With C++ Course PlayList Master the fundamentals of algorithmic thinking and problem-solving with our DSA (Data Structures and Algorithms) With C++ Course! This course is meticulously designed to help you build a strong foundation in data structures and algorithms using C++, one of the most powerful and versatile programming languages.",
      Image: "/images/dsa.png",
    },
    {
      id: 5,
      title: " C++ course",
      description: "This is the best C++ course",
      Image: "/images/cpp.png",
    },
    {
      id: 6,
      title: "C course",
      description: "This is the best C course",
      Image: "/images/c.png",
    },
    {
      id: 7,
      title: "HTML Course",
      description: "This is the best HTML course",
      Image: "/images/html.png",
    },
    {
      id: 8,
      title: "CSS Course",
      description: "This is the best CSS course",
      Image: "/images/css.png",
    },
    {
      id: 15,
      title: "Javascript Course",
      description: "This is the best Javascript course",
      Image: "/images/javascript.png",
    },
    {
      id: 9,
      title: "Java Course",
      description: "This is the best JAVA course",
      Image: "/images/java.png",
    },
    {
      id: 10,
      title: "TailWind CSS Course",
      description: "This is the best TailWind CSS course",
      Image: "/images/tailwind.png",
    },
    {
      id: 11,
      title: "Node.js Course",
      description: "This is the best Node.js course",
      Image: "/images/node.png",
    },
    {
      id: 12,
      title: "Python CSS Course",
      description: "This is the best Python course",
      Image: "/images/python.png",
    },
    {
      id: 13,
      title: "Flutter Course",
      description: "This is the best Flutter course",
      Image: "/images/flutter.png",
    },
    {
      id: 14,
      title: "Full Stack Web Development Course",
      description: "This is the best Full Stack Web Development course",
      Image: "/images/fullstack.png",
    },
  ];
  res.json(foodData);
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map
