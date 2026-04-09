import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sinchana Salimath — Aspiring Data Scientist & Computer Science Student",
  author: "Sinchana Salimath",
  description:
    "Aspiring Data Scientist & CS student, building AI-powered solutions in ML, computer vision, and web development—driven to solve real-world problems and keep learning.",
  lang: "en",
  siteLogo: "/sinch.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sinchana-salimath-b6b26325b/" },
    { text: "Github", href: "https://github.com/sinch2121?tab=repositories" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sinchana Salimath",
    specialty: "Aspiring Data Scientist",
    summary:
      "Aspiring Data Scientist & CS student, building AI-powered solutions in ML, computer vision, and web development—driven to solve real-world problems and keep learning.",
    email: "sinchanaasal@email.com",
  },
 experience: [
  {
    company: "Manmed Dynamics",
    position: "AI & ML Intern",
    startDate: "Feb 2026",
    endDate: "Present",
    summary: [
      "Developing machine learning modules for humanoid surgical assistant systems.",
      "Designing data preprocessing pipelines for multi-source clinical datasets.",
      "Integrating machine learning systems into low-latency robotic subsystems.",
      "Evaluating system reliability and distributed architecture stability.",
      "Contributing to fault-tolerant real-time machine learning workflows.",
      "Worked in human-in-the-loop environments requiring reliable and interpretable outputs.",
      "Considered interaction constraints and clarity in safety-critical applications."
    ],
  },

  {
    company: "EinetCorp",
    position: "AI/ML Engineer",
    startDate: "January 2025",
    endDate: "May 2025",
    summary: [
      "Developed a real-time object detection system for assistive smart glasses for visually impaired users.",
      "Designed and integrated a text-to-speech feedback system to communicate real-time environmental information.",
      "Considered usability and accessibility challenges in delivering real-time auditory feedback.",
      "Evaluated system performance under real-world conditions, including lighting variation and environmental complexity.",
      "Addressed interaction challenges related to response time, clarity of output, and user perception in assistive scenarios.",
      "Optimized system deployment on Raspberry Pi for efficient real-time performance.",
    ],
  }
],   
research: [
  {
    title: "Research Paper (Under Revision) Analyzing the Impact of Governance Effectiveness on Unemployment. – 2025–2026",
    description: [
      
      "Integrated 27 years of World Bank WGI & WDI datasets.",
      "Applied causal inference using DoWhy framework.",
      "Performed statistical validation and robustness analysis.",
      "Designed counterfactual simulations.",
      "Identified significant causal relationships.",
      "Focused on methodological reasoning and real-world interpretation."
    ],
  },
  {
    title: "Connected Vehicle Data Analysis – 2025",
    description: [
      "Designed IoT-based distributed architecture for vehicle data.",
      "Built streaming pipelines for sensor data processing.",
      "Performed preprocessing and feature extraction.",
      "Implemented Random Forest and SVM models.",
      "Handled distributed system challenges.",
      "Evaluated models using Accuracy, Precision, Recall, F1-score."
    ],
  },
  {
    title: "Real-time Object Detection System – 2025",
    description: [
      "Built real-time computer vision system using YOLO.",
      "Implemented preprocessing and bounding box prediction.",
      "Optimized for edge deployment.",
      "Reduced latency via model tuning.",
      "Developed real-time interaction pipeline.",
      "Tested under varying environmental conditions."
    ],
  },
],
  projects: [
    {
      name: "Breast Cancer Prediction system",
      summary: "The Breast Cancer Diagnosis app is a machine learning-powered tool designed to assist medical professionals in diagnosing breast cancer.",
      linkPreview: "https://breast-cancer-prediction-y8pagn8hxdvegvz6wvhr8q.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Breast-Cancer-Prediction",
      image: "/breastcancer.jpg",
    },
     {
      name: "Gemini RAG System Using LLMs",
      summary: "A Retrieval-Augmented Generation system using Google's Gemini LLMs for document-based Q&A.",
      linkPreview: "https://gemini-ragsystem-llm.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Gemini-Retrieval-Augmented-Generation-RAG-system-with-LLMs-from-Scratch",
      image: "/ai.jpg",
    },

    {
  name: "Phishing Website Detection System",
  summary: "A machine learning-powered system that detects phishing websites in real time using a Random Forest model and Streamlit interface.",
  linkPreview: "https://phishing-detection-ml-system-8lhhvtecobzhmzuc99edcd.streamlit.app/", // 🔴 ADD YOUR LINK
  linkSource: "https://github.com/sinch2121/Phishing-detection-ML-system", // 🔴 UPDATE IF NEEDED
  image: "/phishing.png", // 🔴 add image in public/
},
{
  name: "Network Intrusion Detection System",
  summary: "A real-time ML intrusion detection system using Random Forest with interactive analytics and Streamlit deployment.",
  linkPreview: "https://network-intrusion-detection-system-ylmit8digwtipykt84qlb9.streamlit.app/", // 🔴 ADD YOUR LINK
  linkSource: "https://github.com/sinch2121/network-intrusion-detection-system", // 🔴 UPDATE
  image: "/network.jpeg",
},
{
  name: "Cocktail Restaurant Website (GSAP Animations)",
  summary: "An interactive restaurant website with smooth GSAP animations and immersive UI built using HTML, CSS, and JavaScript.",
  linkPreview: "https://velvetpourgsap1.vercel.app/", // Netlify / Vercel
  linkSource: "https://github.com/sinch2121/gsap_cocktails", // 🔴 UPDATE
  image: "/cocktail2.png",
},

    {
      name: "Document Tampering Detection App",
      summary: "A Streamlit-based web application that detects tampering between two documents by comparing their visual similarity using Structural Similarity Index (SSIM).",
      linkPreview: "https://document-tampering-detection-app-cuafstu6jfvk27tv9trkt5.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Document-Tampering-Detection-App",
      image: "/pancard.jpg",
    },

      {
      name: "Project Management App",
      summary: "A Project Management Platform using PostgreSQL, Express JS, React JS and node JS. Create, assign and manage projects. ",
      linkPreview: "https://project-management-fullstack-lyart.vercel.app/",
      linkSource: "https://github.com/sinch2121/project-management-fullstack",
      image: "/projmgt.jpg",
    },

     {
      name: "Real-time Object Detection using Computer Vision",
      summary: "Built a Streamlit-based application using YOLOv5, OpenCV, and pyttsx3 to assist visually impaired users through smart glasses.",
      linkSource: "https://github.com/sinch2121/Real-time-Object-Detection-using-Computer-Vision",
      image: "/impaired.jpg",
    },

    {
      name: "Advertisement of Indian Cities",
      summary:"Designed a visually engaging static website using HTML and CSS to showcase popular Indian Cities.",
      linkSource: "https://github.com/sinch2121/Indian-cities",
      image: "/cities.jpg",
    },
    {
      name: "To-do list using EJS",
      summary:"A basic to-do list project which accepts necessary tasks.",
      linkSource: "https://github.com/sinch2121/To-do-list-using-EJS",
      image: "/to-do.jpg",
    },
     {
      name: "Food delivery webpage",
      summary:"Leveraged HTML, CSS, jQuery and Bootstrap to craft an intuitive and visually appealing user interface. ",
      linkSource: "https://github.com/sinch2121/Food-Delivery-webpage",
      image: "/food.jpg",
    },
  ],
creativeProjects: [
  {
    name: "Constellation Effect",
    link: "https://constellations-effect.netlify.app/",
    image: "/constellation.png",
  },
  {
    name: "Sunrays Effect",
    link: "https://sunrays-effect.netlify.app/",
    image: "/sunrays.png",
  },
  {
    name: "Bubbles Effect",
    link: "https://bubbles-effect.netlify.app/",
    image: "/bubbles.png",
  },
  {
    name: "Wave Bubbles",
    link: "https://wave-bubbles.netlify.app/",
    image: "/wave.png",
  },
  {
    name: "Big Waves",
    link: "https://wave-bubbles-big.netlify.app/",
    image: "/bigwave.png",
  },
],
  about: {
    description: `
      Hi, I'm an aspiring Data Scientist and Computer Science Graduate with hands-on experience in real-time Machine Learning Applications, Computer Vision, and Full-stack Development. I enjoy building intelligent systems—from AI-powered assistive tools to predictive analytics dashboards. Currently seeking internship or job opportunities where I can apply my skills in Python, ML, and Web Development to solve meaningful problems and keep learning along the way.
    `,
    image: "/sinchmain.jpeg",
  },
};

// #5755ff
