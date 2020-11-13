import assets from "assets";

export const skillsBG =
  "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/homeBG%2Fskills.jpg?alt=media&token=221713f7-721d-4ac7-83e4-a3248685dade";

export const skillsDetails = {
  title: "Skills",
  details: [
    {
      icon: assets.web,
      title: "WEB",
      description: "Javascript, ReactJS, TypeScript, HTML, CSS, SCSS, Express, NodeJS, and more",
    },
    {
      icon: assets.database,
      title: "Database",
      description: "MySQL, PostgreSQL, NoSQL (Firebase, MongoDB, Redis)",
    },
    {
      icon: assets.scrum,
      title: "Methodologies",
      description: "Scrum-Agile && SAFe (Scaled Agile Framework)",
    },
    {
      icon: assets.otherTools,
      title: "Other Tools",
      description: "GIT, Docker, VS Code Remote Container, Webpack",
    },
  ],
};
