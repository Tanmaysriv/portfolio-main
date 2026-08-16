import { jsx as _jsx } from "react/jsx-runtime";
import {
  FaPython,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";
const experiences = [
  {
    company: "AIT Bangkok",
    position: "Summer Intern",
    location: "On-Site",
    image: "/company/ait-bangkok.webp",

    description: [
      "Worked on exploratory data analysis and machine-learning workflows using Python.",
      "Collaborated in cross-functional teams on ML-based projects.",
      "Developed a Heart Attack Risk Prediction system using healthcare datasets."
    ],

    startDate: "August 2024",
    endDate: "September 2024",

   technologies: [
  { name: "Python", icon: _jsx(FaPython, {}) },
  { name: "Pandas", icon: _jsx(SiPandas, {}) },
  { name: "NumPy", icon: _jsx(SiNumpy, {}) },
  { name: "Scikit-learn", icon: _jsx(SiScikitlearn, {}) },
  { name: "Jupyter", icon: _jsx(SiJupyter, {}) },
],

    isCurrent: false,
    isBlur: false
  },

  {
    company: "Techoctanet Pvt. Ltd.",
    position: "Web Developer Intern",
    location: "Remote",
    image: "/company/techoctanet.webp",

    description: [
      "Worked with HTML, CSS and JavaScript.",
      "Developed understanding of responsive web design principles.",
      "Improved understanding of frontend architecture.",
      "Explored client-side performance optimization."
    ],

    startDate: "February 2024",
    endDate: "May 2024",

  technologies: [
  { name: "HTML5", icon: _jsx(FaHtml5, {}) },
  { name: "CSS3", icon: _jsx(FaCss3Alt, {}) },
  { name: "JavaScript", icon: _jsx(FaJs, {}) },
  { name: "Git", icon: _jsx(FaGitAlt, {}) },
  { name: "GitHub", icon: _jsx(FaGithub, {}) },
],

    isCurrent: false,
    isBlur: false
  }
];

export default experiences;
