export const personalInfo = {
  name: "Dharini Shrii S",
  role: "Computer Science Engineer & Web Developer",
  subtitles: [
    "Computer Science Engineer",
    "Aspiring Web Developer",
    "Python & C++ Programmer",
    "Tech Enthusiast & NSS Volunteer"
  ],
  bio: "Ambitious and enterprising Computer Science Engineering student at K. Ramakrishnan College of Technology (Anna University), Trichy, with an 85% academic record. Passionate about designing dynamic, responsive web interfaces and developing practical software applications using C++, Java, and Python. Certified in core programming languages, active hackathon participant, football player, and dedicated NSS volunteer eager to contribute and innovate in modern software engineering.",
  careerObjective: "To be a part of a reputed and pioneering organization in the Software and Technology industry which provides a varied range of services and a platform for its employees to grow as successful professionals.",
  email: "dharinis2007@gmail.com",
  phone: "+91 7538856751",
  rawPhone: "7538856751",
  location: "Valady, Lalgudi, Trichy - 621218, Tamil Nadu, India",
  address: "Plot No 5, A K Nagar, Valady, Lalgudi, Trichy - 621218",
  age: 18,
  dob: "30th November 2007",
  nationality: "Indian",
  motherName: "Geetha V",
  college: "K. Ramakrishnan College of Technology (KRCT), Trichy",
  university: "Anna University",
  degree: "Bachelor of Engineering (B.E.) - Computer Science & Engineering",
  academicScore: "85% (Up to 3rd Sem)",
  graduationYear: 2029,
  resumePdfUrl: "/Dharini_Shrii_S_Resume.pdf",
  profileImage: "/profile.jpg",
  reference: {
    name: "Dr. R. Rajavarman",
    designation: "Head of the Department (HOD)",
    institution: "K. Ramakrishnan College of Technology, Trichy"
  }
};

export const stats = [
  { label: "Academic Score", value: "85%", helper: "Anna University / KRCT" },
  { label: "Core Projects", value: "3+", helper: "Web & Python Applications" },
  { label: "Languages Mastered", value: "4+", helper: "C++, Java, Python, JS" },
  { label: "Commitment", value: "100%", helper: "Passionate & Fast Learner" }
];

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "web", name: "Web Development" },
  { id: "programming", name: "Programming Languages" },
  { id: "database", name: "Database & Tools" },
  { id: "core", name: "Core Strengths" }
];

export const skills = [
  {
    name: "HTML5 & CSS3",
    category: "web",
    level: 90,
    badge: "Advanced",
    icon: "code",
    color: "#e44d26",
    description: "Semantic layouts, CSS Grid, Flexbox, media queries, modern UI styling and responsive web design."
  },
  {
    name: "JavaScript (ES6+)",
    category: "web",
    level: 82,
    badge: "Proficient",
    icon: "file-code",
    color: "#f7df1e",
    description: "DOM manipulation, asynchronous operations, event handling, interactive UI components, modern ES6+ features."
  },
  {
    name: "React.js",
    category: "web",
    level: 78,
    badge: "Intermediate",
    icon: "atom",
    color: "#61dafb",
    description: "Component architecture, hooks, state management, props drilling avoidance, clean SPA development."
  },
  {
    name: "Python",
    category: "programming",
    level: 86,
    badge: "Advanced",
    icon: "terminal",
    color: "#3776ab",
    description: "Core Python, scripting, data handling, logic building, string algorithms, CLI & file-handling applications."
  },
  {
    name: "C++",
    category: "programming",
    level: 84,
    badge: "Certified",
    icon: "cpu",
    color: "#00599c",
    description: "Certified proficiency: Object-Oriented Programming (OOP), memory fundamentals, standard template library (STL)."
  },
  {
    name: "Java",
    category: "programming",
    level: 80,
    badge: "Certified",
    icon: "coffee",
    color: "#f89820",
    description: "Certified proficiency: OOP concepts (Inheritance, Polymorphism, Encapsulation), Java collections, multithreading basics."
  },
  {
    name: "Database Management (DBMS)",
    category: "database",
    level: 78,
    badge: "Trained",
    icon: "database",
    color: "#336791",
    description: "Relational database concepts, SQL querying, schema structuring, normalization, and database connectivity."
  },
  {
    name: "Git & Version Control",
    category: "database",
    level: 75,
    badge: "Familiar",
    icon: "git-branch",
    color: "#f05032",
    description: "Git commands, branch workflow, GitHub repository management, team collaboration and code tracking."
  },
  {
    name: "Data Structures & OOP",
    category: "core",
    level: 82,
    badge: "Strong",
    icon: "binary",
    color: "#8b5cf6",
    description: "Array, Stack, Queue, Linked Lists, algorithmic thinking, modular class design and code reusability."
  },
  {
    name: "Problem Solving & Analytical Thinking",
    category: "core",
    level: 88,
    badge: "Excellent",
    icon: "lightbulb",
    color: "#10b981",
    description: "Algorithmic mindset, debugging aptitude, logic formulation, and fast adoption of emerging technologies."
  },
  {
    name: "Communication & Teamwork",
    category: "core",
    level: 90,
    badge: "High",
    icon: "users",
    color: "#ec4899",
    description: "Effective verbal & written communication, collaborative team spirit honed through NSS and hackathons."
  }
];

export const projects = [
  {
    id: "student-collaboration-hub",
    title: "Student Collaboration Hub",
    category: "web",
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    shortDesc: "An all-in-one web portal designed for college students to coordinate study sessions, share peer notes, and manage group academic projects.",
    fullDesc: "Student Collaboration Hub is an intuitive, responsive web application engineered to solve communication friction among university peers. Built using semantic HTML5, modern CSS3 styling, and modular JavaScript, the platform offers discussion spaces, subject-wise study material sharing, task assignees, and progress tracking.",
    features: [
      "Subject-wise resource repository for sharing study material and links",
      "Interactive group project board with real-time progress indicators",
      "Notice board for departmental announcements and upcoming deadlines",
      "Clean, modern responsive UI tailored for mobile, tablet, and desktop screens",
      "Client-side persistence using browser LocalStorage for offline reliability"
    ],
    github: "https://github.com/dharinishrii/student-collaboration-hub",
    liveDemo: "#interactive-hub",
    tags: ["Web Development", "Frontend", "UI/UX", "College Collaboration"],
    icon: "users",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "expense-management-system",
    title: "Expense Management System",
    category: "python",
    techStack: ["Python", "SQLite / File I/O", "Data Analytics"],
    shortDesc: "A smart personal finance tracker to monitor budgets, categorize day-to-day expenditures, track savings, and visualize financial habits.",
    fullDesc: "Developed in Python, this application provides users with comprehensive control over their personal finances. Users can record income and expenditures, categorize expenses (such as food, academics, travel, and lifestyle), set monthly budget ceilings, and receive instant alerts when approaching thresholds.",
    features: [
      "Dynamic expense logging with date, tags, and payment mode",
      "Smart category breakdown (Food, Books, Travel, Tuition, Misc)",
      "Budget ceiling warning mechanism preventing accidental overspending",
      "Monthly and weekly summary reports with mathematical variance analysis",
      "Structured CSV/File exports for record-keeping and external auditing"
    ],
    github: "https://github.com/dharinishrii/expense-management-system",
    liveDemo: "#interactive-expense",
    tags: ["Python", "Finance", "Data Management", "Automation"],
    icon: "wallet",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    id: "password-strength-checker",
    title: "Password Strength Checker",
    category: "python",
    techStack: ["Python", "Regex", "Entropy Algorithm", "Cybersecurity"],
    shortDesc: "A cybersecurity utility assessing password strength, entropy, brute-force cracking resistance, and offering real-time hardening tips.",
    fullDesc: "The Password Strength Checker is an algorithm-driven security utility created in Python that inspects credentials against stringent cybersecurity standards. It calculates information entropy, checks regex criteria (uppercase, lowercase, numbers, symbols, length), identifies common dictionary vulnerabilities, and estimates brute-force cracking resistance.",
    features: [
      "Shannon entropy calculation providing quantitative security metrics",
      "Comprehensive multi-criteria validation (Length, Mixed Case, Digits, Symbols)",
      "Common dictionary pattern and repetitive character detection",
      "Instant cracking duration estimation (from seconds to millions of years)",
      "Dynamic recommendations providing custom feedback to harden credentials"
    ],
    github: "https://github.com/dharinishrii/password-strength-checker",
    liveDemo: "#interactive-pwd",
    tags: ["Python", "Cybersecurity", "Algorithms", "Utility Tool"],
    icon: "shield-check",
    gradient: "from-purple-500 to-pink-500"
  }
];

export const educationList = [
  {
    id: "be-cse",
    course: "Bachelor of Engineering (B.E.)",
    specialization: "Computer Science & Engineering",
    institution: "K. Ramakrishnan College of Technology (KRCT)",
    location: "Trichy, Tamil Nadu",
    board: "Anna University",
    duration: "2025 - 2029",
    score: "85% (Upto 3rd Sem)",
    badge: "Current Degree",
    status: "In Progress",
    description: "Pursuing rigorous computer science engineering curriculum with emphasis on Object-Oriented Programming, Data Structures, Web Development, and Database Systems. Active in departmental programming contests and technical symposiums."
  },
  {
    id: "hsc",
    course: "Higher Secondary Certificate (HSC - 12th Grade)",
    specialization: "Computer Science & Mathematics Stream",
    institution: "The Girl's Higher Secondary School",
    location: "Srirangam, Trichy",
    board: "Tamil Nadu State Board",
    duration: "2023 - 2025",
    score: "75.5%",
    badge: "Completed",
    status: "Graduated",
    description: "Completed higher secondary education with strong focus on computer science, advanced mathematics, physics, and chemistry, laying a firm foundation for engineering studies."
  },
  {
    id: "sslc",
    course: "Secondary School Leaving Certificate (SSLC - 10th Grade)",
    specialization: "General Studies",
    institution: "The Girl's Higher Secondary School",
    location: "Srirangam, Trichy",
    board: "Tamil Nadu State Board",
    duration: "2021 - 2023",
    score: "76.6%",
    badge: "Completed",
    status: "Graduated",
    description: "Graduated secondary schooling with high distinction, excelling in science and mathematics subjects while actively taking part in school sports and cultural activities."
  }
];

export const trainingAndCertifications = [
  {
    title: "Web Development Training",
    focus: "HTML5, CSS3 & JavaScript",
    type: "Technical Training",
    description: "Completed intensive training covering modern frontend web development, semantic markup, responsive UI layouts, and asynchronous JavaScript logic.",
    icon: "layout"
  },
  {
    title: "Python Programming & Database Management",
    focus: "Python, SQL & Database Structuring",
    type: "Technical Training",
    description: "Underwent hands-on training on Python scripting, data structures, relational database normalization, and SQL query optimization.",
    icon: "database"
  },
  {
    title: "C++ Programming Certification",
    focus: "OOP, Data Structures & STL",
    type: "Official Certification",
    description: "Certified for proficiency in C++ language fundamentals, Object-Oriented principles, memory management, and standard template libraries.",
    icon: "award"
  },
  {
    title: "JAVA Programming Certification",
    focus: "Core Java, OOP & Collections",
    type: "Official Certification",
    description: "Certified in Java software development, exception handling, multithreading, and OOP application architecture.",
    icon: "check-circle"
  }
];

export const activitiesAndLeadership = [
  {
    title: "Department Coding Competitions & Hackathons",
    role: "Active Participant & Competitor",
    category: "Technical",
    icon: "terminal",
    description: "Regular participant in department coding competitions, problem-solving challenges, and technical symposiums conducted by K. Ramakrishnan College of Technology."
  },
  {
    title: "Emerging Tech & AI Workshops",
    role: "Attendee & Enthusiast",
    category: "Technical",
    icon: "sparkles",
    description: "Attended intensive workshops on Web Development, Artificial Intelligence, and Emerging Technologies to stay ahead of modern industry paradigms."
  },
  {
    title: "National Service Scheme (NSS)",
    role: "Active College Volunteer",
    category: "Social Impact & Leadership",
    icon: "heart-handshake",
    description: "Dedicated volunteer in the college NSS unit, actively coordinating social awareness drives, blood donation camps, environmental initiatives, and youth community development."
  },
  {
    title: "Football Player",
    role: "Active Sports Participant",
    category: "Sports & Fitness",
    icon: "trophy",
    description: "Passionate football player, fostering team cohesion, rapid decision-making, physical resilience, and leadership under high-pressure scenarios."
  }
];
