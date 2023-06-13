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
      emoji: " 🇪🇺",
      text: "based in Budapest, Hungary",
      url: "",
    },
    // {
    //   emoji: "💻",
    //   text: "Full Stack Developer",
    //   url: "",
    // },
    {
      emoji: "📧",
      text: "attila.huszar@outlook.com",
      url: "mailto:attila.huszar@outlook.com?subject=Let's work on something together!",
    },
  ],
  socials: [
    {
      link: "http://localhost:3000/Attila_Huszar_CV.pdf",
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
  bio: "Hello! I'm Attila Huszár. I'm a Full Stack Developer. I studied web development at Green Fox Academy, I enjoy building web applications and learning new technologies. I love to travel and explore new places. I'm currently based in Budapest, Hungary. (Willing to relocate!)",
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML/CSS"],
    frameworks: ["React", "Material UI", "Node.js", "Express"],
    databases: ["MySQl", "Sequelize "],
    // cloudServices: [
    //   "AWS S3",
    //   "AWS EC2",
    //   "AWS SNS",
    //   "Heroku",
    //   "Netlify",
    // ],
    tools: ["Git", "Postman", "npm", "Jira", "Google Analytics"],
  },
  hobbies: [
    {
      label: "Photography",
      emoji: "📷",
    },
    {
      label: "Video Games",
      emoji: "🎮",
    },
    {
      label: "Guitar",
      emoji: "🎸",
    },
    {
      label: "Traveling",
      emoji: "✈️",
    },
    {
      label: "Fishing",
      emoji: "🎣",
    },
  ],
  portfolio: [
    {
      title: "Portfolio site",
      live: null,
      source: "https://github.com/",
      image: "url",
    },
  ],
};
