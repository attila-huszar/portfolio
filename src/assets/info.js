const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Attila",
  lastName: "Huszár",
  initials: "AH",
  position: "a Full Stack Developer",
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🇪🇺",
      text: "based in Budapest, Hungary",
      url: "",
    },
    // {
    //   emoji: "💻",
    //   text: "Full Stack Developer",
    //   url: "",
    // },
    {
      emoji: "✉️",
      text: "attila.huszar@outlook.com",
      url: "mailto:attila.huszar@outlook.com?subject=Let's work on something together!",
    },
  ],
  socials: [
    {
      link: "https://attila-huszar.netlify.app/Attila_Huszar_CV.pdf",
      icon: "fa fa-file-text",
      label: "Resume",
    },
    {
      link: "https://github.com/attila-huszar",
      icon: "fa fa-github",
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/attilahuszar/",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    },
  ],
  bio: "Greetings! I am Attila Huszár. My educational background includes studying software development at Green Fox Academy Budapest. I take great pleasure in constructing web applications and expanding my knowledge of emerging technologies. Furthermore, I have a strong passion for discovering new places and going on exciting travel adventures.",
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML/CSS"],
    frameworks: [
      "React",
      "Node.js",
      "Express",
      "Material UI",
      "Sass",
      "Tailwind",
    ],
    databases: ["MySQl", "Sequelize"],
    // cloudServices: [
    //   "AWS S3",
    //   "AWS EC2",
    //   "AWS SNS",
    //   "Heroku",
    //   "Netlify",
    // ],
    tools: [
      "Git",
      "CI/CD",
      "Postman",
      "npm",
      "Jira",
      "SEO",
      "Google Analytics",
      "Graphic design",
    ],
  },
  hobbies: [
    {
      label: "Cycling",
      emoji: "🚴",
    },
    {
      label: "Food saving",
      emoji: "🍲",
    },
    {
      label: "Traveling",
      emoji: "✈️",
    },
  ],
  portfolio: [
    {
      title: "Portfolio",
      live: "https://attila-huszar.netlify.app/",
      source: "https://github.com/attila-huszar/portfolio/",
      image: "https://attila-huszar.netlify.app/portfolio.jpg",
    },
    {
      title: "Full Stack School Project",
      live: "",
      source: "https://github.com/attila-huszar/fox-ticket-react/",
      image: "https://attila-huszar.netlify.app/fox-ticket-react.jpg",
    },
  ],
};
