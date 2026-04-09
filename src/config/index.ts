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
      company: "EinetCorp",
      position: "AI/ML Engineer",
      startDate: "January 2025",
      endDate: "May 202",
      summary: [
        "Developed a Streamlit-based AI application leveraging YOLOv5 and OpenCV for real-time object detection tailored to assist visually impaired users via smart glasses.",
        "Integrated text-to-speech (TTS) feedback using pyttsx3 to provide audio descriptions of detected objects, enhancing user accessibility.",
        "Implemented offline deployment on Raspberry Pi to enable portable, standalone operation without internet connectivity. ",
        "Created automated generation of detailed detection reports (PDF and CSV) from images, videos, and live webcam streams to support user monitoring and analysis.",
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
