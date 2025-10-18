/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yuexuan Qi",
  title: "Hi all, I'm Yuexuan",
  subTitle: emoji(
    "Software Engineer with experience in device management (Microsoft Intune), Unity/C# and Python. I build reliable backend services and interactive 3D/front-end experiences, and I love solving complex customer issues with calm, clear communication."
  ),
  resumeLink:
    "", // Add a public resume link if you have one (e.g., Google Drive share link)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alyssa-Qi",
  linkedin: "https://www.linkedin.com/in/alyssa-qi-5965441a4/",
  email: "yuexuanqi@yahoo.com",
  gitlab: "", // no public GitLab profile to show
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL-STACK/PLATFORM-ORIENTED ENGINEER WITH EXPERIENCE IN INTUNE, UNITY/C#, PYTHON, AND DATA ANALYSIS",
  skills: [
    emoji("⚡ Troubleshoot and resolve complex device management issues in Microsoft Intune"),
    emoji("⚡ Build interactive Unity apps: multiplayer chat, resource pipelines, and gameplay features"),
    emoji("⚡ Develop Python computer vision features (OpenCV) and data processing pipelines"),
    emoji("⚡ Implement backend protocols, server-side features, and real-time client/server communication"),
    emoji("⚡ Analyze data with SQL/Pandas; visualize insights for business decisions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Unity", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "OpenCV", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "MATLAB", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Microsoft Intune", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "REST/Socket", fontAwesomeClassname: "fas fa-plug" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University — Integrated Innovation Institute",
      logo: require("./assets/images/cmuLogo.png"), // add this asset
      subHeader: "Master of Software Management",
      duration: "Aug 2025 - Present",
      desc:
        "Core: Foundation of Software Management, Architecture & Programming Principles, Product Management.",
      descBullets: []
    },
    {
      schoolName: "Pennsylvania State University",
      logo: require("./assets/images/pennStateLogo.png"), // add this asset
      subHeader: "B.S. in Applied Mathematics (Eberly College of Science), GPA: 3.75/4.0",
      duration: "Aug 2018 - May 2022",
      desc:
        "Dean’s List in all eligible semesters. Core: Numerical Analysis, Programming Technique, Probability, Real Analysis, Calculus, ODE/PDE.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity/C# and Real-time Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "Python (OpenCV, Data Processing)",
      progressPercentage: "80%"
    },
    {
      Stack: "Device Management (Intune), Troubleshooting",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intune Support Engineer",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"), // add this asset
      date: "Dec 2023 – Apr 2025",
      desc:
        "Provided technical support for Microsoft Intune across device management and configuration. Deployed and managed policies to ensure security and compliance. Communicated with customers to analyze and diagnose complex issues; received multiple Customer Hero recognitions for outstanding service.",
      descBullets: [
        "Calm, empathetic incident handling to keep customers focused during hot states",
        "Root cause analysis and step-by-step remediation for device compliance"
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Unity Technologies",
      companylogo: require("./assets/images/unityLogo.png"), // add this asset
      date: "Sep 2022 – Nov 2023",
      desc:
        "Worked on Digital Human and Metaverse Game projects for Korea and Hong Kong markets.",
      descBullets: [
        "Built Python OpenCV facial recognition and key-point mapping (Haar-based), integrated into Unity pipeline",
        "Implemented terrain/front-end and backend protocols for real-time interactions; server-side join, nickname, data storage",
        "Developed multiplayer chat (Sockets, Mirror), managed resource lifecycle (packaging, upload, versioning), testing and bug fixing"
      ]
    },
    {
      role: "Financial Analyst Intern",
      company: "LGC Group",
      companylogo: require("./assets/images/lgcLogo.png"), // add this asset
      date: "Aug 2022 – Sep 2022",
      desc:
        "Managed and analyzed financial datasets in IFS using SQL, Excel, and Pandas to identify arrears and payment patterns; audited reimbursement records and prepared documents for overseas investments.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle: "WORK HIGHLIGHTS AND INITIATIVES",
  projects: [
    {
      image: require("./assets/images/unityProject.webp"), // add this asset
      projectName: "Digital Human (Unity + OpenCV)",
      projectDesc:
        "Facial detection/key-point mapping in Python (OpenCV, Haar) with Unity integration for realistic digital human features.",
      footerLink: []
    },
    {
      image: require("./assets/images/metaverseProject.webp"), // add this asset
      projectName: "Metaverse Multiplayer Systems",
      projectDesc:
        "Server-client protocols, real-time interactions, chat with Sockets/Mirror, resource lifecycle and versioning in Unity.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Recognition, certifications, and accomplishments.",

  achievementsCards: [
    // Add items here when you have public links to certifications or awards.
    // Example:
    // {
    //   title: "Customer Hero Recognition",
    //   subtitle: "Multiple commendations for outstanding customer support at Microsoft Intune.",
    //   image: require("./assets/images/award.webp"),
    //   imageAlt: "Award",
    //   footerLink: []
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy sharing what I learn about Unity, computer vision, and scalable support workflows.",
  displayMediumBlogs: "false", // Set true if you connect a Medium username
  blogs: [],
  display: false // Hide until you add posts
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Occasional knowledge sharing on tooling and workflows"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations about engineering and wellbeing",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set true and add resumeLink in greeting to show
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to 2026 Summer internships in Software Engineering & Product Management.",
  number: "+1 408 315 2908",
  email_address: "yuexuanqi@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // Add your username without @ if applicable
  display: false // Hide by default
};

const isHireable = true; // Looking for opportunities (2026 Summer Internship)

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};