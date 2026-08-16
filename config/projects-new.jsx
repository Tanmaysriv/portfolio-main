import { jsx as _jsx } from "react/jsx-runtime";
import React from "@/components/technologies/React";
import Vite from "@/components/technologies/Vite";
import TailwindCss from "@/components/technologies/TailwindCss";
import ThreeJs from "@/components/technologies/ThreeJs";
import NodeJs from "@/components/technologies/NodeJs";
import Python from "@/components/technologies/Python";
import Streamlit from "@/components/technologies/Streamlit";
import GSAP from "@/components/technologies/GSAP";
import JavaScript from "@/components/technologies/JavaScript";
import TensorFlow from "@/components/technologies/TensorFlow";
import Keras from "@/components/technologies/Keras";
import Pandas from "@/components/technologies/Pandas";
import NumPy from "@/components/technologies/NumPy";
import Scikit from "@/components/technologies/Scikit";

export const projects = [
  // ARVANA - Flagship Project
  {
    id: "arvana",
    category: "AR / 3D / E-COMMERCE",
    title: "ARVANA",
    description: "ARVANA is an AR virtual try-on and immersive e-commerce platform combining real-time detection, 3D rendering and modern web technologies to create richer product experiences.",
    longDescription: "An advanced e-commerce platform featuring real-time AR try-on capabilities, 3D product visualization, and AI-powered pose/hand/face detection for immersive shopping experiences.",
    image: "/project/arvana/hero.png",
    link: "/projects/arvana",
    github: "https://github.com/Tanmaysriv/ARVANA-pvt",
    technologies: [
      { name: "React", icon: _jsx(React, {}) },
      { name: "Vite", icon: _jsx(Vite, {}) },
      { name: "Tailwind CSS", icon: _jsx(TailwindCss, {}) },
      { name: "Three.js", icon: _jsx(ThreeJs, {}) },
      { name: "TensorFlow.js", icon: _jsx(TensorFlow, {}) },
      { name: "Node.js", icon: _jsx(NodeJs, {}) },
    ],
    features: [
      "Real-time AR try-on",
      "3D product visualization",
      "Face detection (MediaPipe)",
      "Hand detection (MediaPipe)",
      "Pose detection (MediaPipe)",
      "Interactive 3D rendering",
      "Multi-category experiences",
      "Mobile optimization",
      "Instant capture",
      "Share/download functionality",
      "Privacy-first processing",
      "AI-powered detection",
    ],
    isFeatured: true,
    isDominant: true,
    status: "in-progress",
  },

  // StyleSync AI
  {
    id: "stylesync-ai",
    category: "GENERATIVE AI",
    title: "StyleSync AI",
    description: "A Generative AI application that analyzes historical LinkedIn posts of influencers and generates new posts matching their writing style, tone, language and length.",
    image: "/project/stylesync/hero.png",
    github: "https://github.com/Tanmaysriv/StyleSync-AI",
    link: "https://github.com/Tanmaysriv/StyleSync-AI",
    technologies: [
      { name: "Python", icon: _jsx(Python, {}) },
      { name: "Streamlit", icon: _jsx(Streamlit, {}) },
    ],
    features: [
      "Historical post analysis",
      "Writing-style analysis",
      "Tone matching",
      "Language matching",
      "Length matching",
      "Customizable generation parameters",
      "Streamlit UI",
      "LLM-powered generation",
    ],
    timeline: "September – October 2025",
    isFeatured: true,
  },

  // 3D iPhone E-Commerce
  {
    id: "3d-iphone",
    category: "3D / FRONTEND / E-COMMERCE",
    title: "3D iPhone E-Commerce",
    description: "A modern React-based e-commerce experience showcasing the iPhone 15 Pro in 3D using Three.js, GSAP and Tailwind CSS.",
    image: "/project/3d-iphone/hero.png",
    github: "https://github.com/Tanmaysriv/3d_iphone",
    technologies: [
      { name: "React", icon: _jsx(React, {}) },
      { name: "Three.js", icon: _jsx(ThreeJs, {}) },
      { name: "GSAP", icon: _jsx(GSAP, {}) },
      { name: "Tailwind CSS", icon: _jsx(TailwindCss, {}) },
    ],
    features: [
      "Interactive 3D product visualization",
      "Smooth animations",
      "Product-focused UI",
      "Responsive design",
    ],
    isFeatured: true,
  },

  // Ele-Types
  {
    id: "ele-types",
    category: "JAVASCRIPT / REACT",
    title: "Ele-Types",
    description: "A typing test application measuring WPM and accuracy with real-time feedback.",
    image: "/project/ele-types/hero.png",
    github: "https://github.com/Tanmaysriv/Ele-Types",
    link: "https://github.com/Tanmaysriv/Ele-Types",
    technologies: [
      { name: "HTML", icon: _jsx(React, {}) },
      { name: "CSS", icon: _jsx(TailwindCss, {}) },
      { name: "JavaScript", icon: _jsx(JavaScript, {}) },
      { name: "React", icon: _jsx(React, {}) },
    ],
    features: [
      "WPM measurement",
      "Accuracy tracking",
      "Real-time feedback",
      "Animated progress bars",
      "Confetti effects",
      "Dark mode",
    ],
    timeline: "August – November 2024",
    isFeatured: true,
  },

  // Fraud Detection
  {
    id: "fraud-detection",
    category: "MACHINE LEARNING / DATA SCIENCE",
    title: "Fraud Detection",
    description: "A machine-learning project based on the Enron dataset with comprehensive data preparation and algorithmic analysis.",
    image: "/project/fraud-detection/hero.png",
    github: "https://github.com/Tanmaysriv/Fraud-Detection",
    technologies: [
      { name: "Python", icon: _jsx(Python, {}) },
      { name: "Pandas", icon: _jsx(Pandas, {}) },
      { name: "NumPy", icon: _jsx(NumPy, {}) },
      { name: "Scikit-learn", icon: _jsx(Scikit, {}) },
    ],
    features: [
      "143 samples analyzed",
      "20 features engineered",
      "Missing-value imputation",
      "Outlier detection",
      "Exploratory data analysis",
      "PCA dimensionality reduction",
      "Seven supervised learning algorithms",
      "Cross-validation",
    ],
    keyFinding: "Model performance improved significantly through data preparation rather than algorithm complexity.",
    timeline: "August – November 2024",
    isFeatured: false,
  },

  // Chest X-Ray Diagnosis
  {
    id: "chest-xray",
    category: "DEEP LEARNING / COMPUTER VISION",
    title: "Chest X-Ray Diagnosis",
    description: "A deep-learning project performing multi-label classification on the Chest X-ray 8 dataset.",
    image: "/project/chest-xray/hero.png",
    github: "https://github.com/Tanmaysriv/Chest-X-Ray-Diagnosis",
    technologies: [
      { name: "Python", icon: _jsx(Python, {}) },
      { name: "TensorFlow", icon: _jsx(TensorFlow, {}) },
      { name: "Keras", icon: _jsx(Keras, {}) },
    ],
    features: [
      "Multi-label classification",
      "108,948 images processed",
      "14 pathology classes",
      "Class imbalance handling",
      "Weight normalization",
      "Grad-CAM visualization",
      "Model interpretability",
      "Diagnostic region identification",
    ],
    timeline: "January – March 2024",
    isFeatured: false,
  },

  // Heart Attack Analysis
  {
    id: "heart-attack",
    category: "DATA ANALYSIS / MACHINE LEARNING",
    title: "Heart Attack Analysis",
    description: "Data analysis and prediction work exploring patterns associated with heart attack risk using healthcare datasets.",
    image: "/project/heart-attack/hero.png",
    github: "https://github.com/Tanmaysriv/Heart-Attack-Analysis",
    technologies: [
      { name: "Python", icon: _jsx(Python, {}) },
      { name: "Pandas", icon: _jsx(Pandas, {}) },
      { name: "NumPy", icon: _jsx(NumPy, {}) },
    ],
    features: [
      "Healthcare data exploration",
      "Risk pattern analysis",
      "Predictive modeling",
      "Data visualization",
    ],
    context: "A Heart Attack Risk Prediction system was developed during Tanmay's AIT Bangkok internship using healthcare datasets.",
    timeline: "August – September 2024",
    isFeatured: false,
  },
];

export const moreProjects = [
  { name: "ARVANA-pvt", url: "https://github.com/Tanmaysriv/ARVANA-pvt" },
  { name: "NExaa", url: "https://github.com/Tanmaysriv/NExaa" },
  { name: "DSA", url: "https://github.com/Tanmaysriv/DSA" },
  { name: "Arv", url: "https://github.com/Tanmaysriv/Arv" },
  { name: "Shell-Scripting", url: "https://github.com/Tanmaysriv/Shell-Scripting" },
  { name: "TypeVibe", url: "https://github.com/Tanmaysriv/TypeVibe" },
  { name: "tanmay-blogs", url: "https://github.com/Tanmaysriv/tanmay-blogs" },
  { name: "To-do-list", url: "https://github.com/Tanmaysriv/To-do-list" },
  { name: "Quiz-App", url: "https://github.com/Tanmaysriv/Quiz-App" },
  { name: "Mausam", url: "https://github.com/Tanmaysriv/Mausam" },
];

export const repositoriesUrl = "https://github.com/Tanmaysriv?tab=repositories";
