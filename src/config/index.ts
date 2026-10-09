import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sinchana Salimath — AI/ML & Full-Stack Engineer",
  author: "Sinchana Salimath",
  description:
    "AI/ML & Full-Stack Engineer building RAG systems, real-time computer vision and production-ready AI applications. Explore my work.",
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
    specialty: "AI/ML & Full-Stack Engineer",
    summary:
      "I build and ship AI systems end to end: LLM and RAG applications, real-time computer vision, and the APIs and interfaces around them.",
    email: "sinchanaasal@gmail.com",
  },

  about: {
    description: `
      I'm an AI/ML Engineer with a BCA background and hands-on experience building AI applications end to end: data pipelines, retrieval systems, model evaluation, inference optimization, and API integration. I've worked on ML pipelines for humanoid surgical assistant systems, and on real-time computer vision for assistive smart glasses running on Raspberry Pi. I also build full-stack products with FastAPI, Node.js, React and PostgreSQL. Browse my projects below, and feel free to reach out.
    `,
    image: "/sinchmain.jpeg",
  },

  experience: [
    {
      company: "ManMed Dynamics",
      position: "AI & ML Engineer Intern",
      startDate: "Jan 2026",
      endDate: "Apr 2026",
      summary: [
        "Built Python/PyTorch ML pipelines for humanoid surgical assistant systems, covering preprocessing, training, evaluation and optimization.",
        "Developed real-time AI inference pipelines for robotic applications, focused on low latency and efficient deployment.",
        "Built data pipelines for ingestion, cleaning and feature engineering across multi-source clinical datasets.",
        "Supported model evaluation, monitoring, debugging and interpretability in human-in-the-loop systems.",
        "Applied NLP and GenAI techniques to structured and unstructured data for decision-support workflows.",
      ],
    },
    {
      company: "EinetCorp",
      position: "AI & ML Engineer Intern",
      startDate: "Feb 2025",
      endDate: "May 2025",
      summary: [
        "Built a real-time object detection app for assistive smart glasses using Python, TensorFlow, OpenCV and FastAPI.",
        "Optimized inference on Raspberry Pi to 15–20 FPS, cutting latency by ~25%.",
        "Integrated models with REST APIs and built preprocessing and evaluation workflows in Linux.",
        "Added text-to-speech feedback to deliver environmental information to visually impaired users.",
      ],
    },
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
        "Focused on methodological reasoning and real-world interpretation.",
      ],
      pdf: "/independent_research_paper.pdf",
    },
    {
      title: "Real-time Object Detection System – 2025",
      description: [
        "Built real-time computer vision system using YOLO.",
        "Implemented preprocessing and bounding box prediction.",
        "Optimized for edge deployment.",
        "Reduced latency via model tuning.",
        "Developed real-time interaction pipeline.",
        "Tested under varying environmental conditions.",
      ],
      pdf: "/ACADEMIC_DISSERTATION_1_Real_time_object.pdf",
    },
    {
      title: "Connected Vehicle Data Analysis – 2025",
      description: [
        "Designed IoT-based distributed architecture for vehicle data.",
        "Built streaming pipelines for sensor data processing.",
        "Performed preprocessing and feature extraction.",
        "Implemented Random Forest and SVM models.",
        "Handled distributed system challenges.",
        "Evaluated models using Accuracy, Precision, Recall, F1-score.",
      ],
      pdf: "/ACADEMIC_DISSERTATION_2_connected vehicle-reportfinal.pdf",
    },
  ],

  projects: [
    {
      name: "Gemini RAG System Using LLMs",
      summary:
        "RAG app for PDF, DOCX and TXT Q&A using Gemini, LangChain and FAISS with an agentic workflow. ~30% better answer relevance and sub-2-second responses.",
      linkPreview: "https://gemini-ragsystem-llm.streamlit.app/",
      linkSource:
        "https://github.com/sinch2121/Gemini-Retrieval-Augmented-Generation-RAG-system-with-LLMs-from-Scratch",
      image: "/ai.jpg",
    },
    {
      name: "Real-time Object Detection for Smart Glasses",
      summary:
        "End-to-end pipeline with YOLOv5, OpenCV and text-to-speech to assist visually impaired users. Runs at 15–20 FPS on Raspberry Pi with ~25% lower latency.",
      linkSource: "https://github.com/sinch2121/Real-time-Object-Detection-using-Computer-Vision",
      image: "/impaired.jpg",
    },
    {
      name: "Project Management App",
      summary:
        "Full-stack platform built with PostgreSQL, Express, React and Node.js to create, assign and manage projects.",
      linkPreview: "https://project-management-fullstack-lyart.vercel.app/",
      linkSource: "https://github.com/sinch2121/project-management-fullstack",
      image: "/projmgt.jpg",
    },
    {
      name: "Breast Cancer Prediction System",
      summary:
        "ML-powered diagnosis tool with probability-based predictions and interactive visualization. ~95% accuracy on the Wisconsin Breast Cancer Dataset.",
      linkPreview: "https://breast-cancer-prediction-y8pagn8hxdvegvz6wvhr8q.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Breast-Cancer-Prediction",
      image: "/breastcancer.jpg",
    },
    {
      name: "Phishing Website Detection System",
      summary:
        "Detects phishing websites in real time using a Random Forest model with a Streamlit interface.",
      linkPreview: "https://phishing-detection-ml-system-8lhhvtecobzhmzuc99edcd.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Phishing-detection-ML-system",
      image: "/phishing.png",
    },
    {
      name: "Network Intrusion Detection System",
      summary:
        "Real-time ML intrusion detection using Random Forest, with interactive analytics deployed on Streamlit.",
      linkPreview: "https://network-intrusion-detection-system-ylmit8digwtipykt84qlb9.streamlit.app/",
      linkSource: "https://github.com/sinch2121/network-intrusion-detection-system",
      image: "/network.jpeg",
    },
    {
      name: "Document Tampering Detection App",
      summary:
        "Streamlit web app that detects tampering between two documents by comparing visual similarity with the Structural Similarity Index (SSIM).",
      linkPreview: "https://document-tampering-detection-app-cuafstu6jfvk27tv9trkt5.streamlit.app/",
      linkSource: "https://github.com/sinch2121/Document-Tampering-Detection-App",
      image: "/pancard.jpg",
    },
    {
      name: "Adaptive Focus-Aware Interface",
      summary:
        "Adaptive HCI system that infers user attention from interaction patterns and adjusts the interface using real-time feedback and focus scoring.",
      linkPreview: "https://sinch2121.github.io/hci-focus-adaptive-interface/",
      linkSource: "https://github.com/sinch2121/hci-focus-adaptive-interface",
      image: "/hci.jpg",
    },
    {
      name: "Cocktail Restaurant Website (GSAP Animations)",
      summary:
        "Interactive restaurant website with smooth GSAP animations and an immersive UI built with HTML, CSS and JavaScript.",
      linkPreview: "https://velvetpourgsap1.vercel.app/",
      linkSource: "https://github.com/sinch2121/gsap_cocktails",
      image: "/cocktail2.png",
    },
    {
      name: "Advertisement of Indian Cities",
      summary:
        "Visually engaging static website built with HTML and CSS to showcase popular Indian cities.",
      linkSource: "https://github.com/sinch2121/Indian-cities",
      image: "/cities.jpg",
    },
    {
      name: "Food Delivery Webpage",
      summary:
        "Responsive, visually appealing user interface built with HTML, CSS, jQuery and Bootstrap.",
      linkSource: "https://github.com/sinch2121/Food-Delivery-webpage",
      image: "/food.jpg",
    },
    {
      name: "To-do List using EJS",
      summary: "A simple to-do list app built with Node.js and EJS for adding and managing tasks.",
      linkSource: "https://github.com/sinch2121/To-do-list-using-EJS",
      image: "/to-do.jpg",
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
};