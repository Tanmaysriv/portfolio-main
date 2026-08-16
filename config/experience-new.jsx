import { jsx as _jsx } from "react/jsx-runtime";
import Python from "@/components/technologies/Python";
import HTML from "@/components/technologies/HTML";
import CSS from "@/components/technologies/CSS";
import JavaScript from "@/components/technologies/JavaScript";

export const experiences = [
  {
    id: "ait-bangkok",
    company: "AIT Bangkok",
    position: "Summer Intern",
    type: "On-Site",
    location: "Bangkok, Thailand",
    startDate: "August 2024",
    endDate: "September 2024",
    image: "/company/ait-bangkok.jpg",
    description: [
      "Worked on EDA and machine-learning workflows using Python.",
      "Collaborated in cross-functional teams on ML-based projects.",
      "Developed a Heart Attack Risk Prediction system using healthcare datasets.",
    ],
    technologies: [
      { name: "Python", icon: _jsx(Python, {}) },
      { name: "Pandas", icon: _jsx(Python, {}) },
      { name: "NumPy", icon: _jsx(Python, {}) },
      { name: "Scikit-learn", icon: _jsx(Python, {}) },
      { name: "Jupyter Notebook", icon: _jsx(Python, {}) },
    ],
    duration: "2 months",
    isCurrent: false,
  },
  {
    id: "techoctanet",
    company: "Techoctanet Pvt. Ltd.",
    position: "Web Developer Intern",
    type: "Remote",
    location: "India",
    startDate: "February 2024",
    endDate: "May 2024",
    image: "/company/techoctanet.jpg",
    description: [
      "Worked with HTML.",
      "Worked with CSS.",
      "Worked with JavaScript.",
      "Practiced responsive web design.",
      "Improved understanding of frontend architecture.",
      "Explored client-side performance optimization.",
    ],
    technologies: [
      { name: "HTML", icon: _jsx(HTML, {}) },
      { name: "CSS", icon: _jsx(CSS, {}) },
      { name: "JavaScript", icon: _jsx(JavaScript, {}) },
    ],
    duration: "4 months",
    isCurrent: false,
  },
];

export const education = [
  {
    id: "btech",
    school: "United College of Engineering and Research",
    location: "Prayagraj, India",
    degree: "B.Tech in Computer Science (AIML)",
    field: "Artificial Intelligence & Machine Learning",
    graduationDate: "2026",
    cgpa: 7.98,
    status: "In Progress",
  },
  {
    id: "intermediate",
    school: "Ewing Christian Public Senior Secondary School",
    location: "Prayagraj, India",
    degree: "Intermediate — CBSE",
    percentage: "83.6%",
    graduationDate: "July 2022",
  },
];
