import styles from "helpers/stylings/global.scss";
import assets from "assets";

export const menuItems = [
  { key: "home", value: "Home" },
  { key: "aboutMe", value: "About Me" },
  { key: "skills", value: "Skills" },
  { key: "workExp", value: "Work Experience" },
  { key: "projects", value: "Projects" },
  { key: "funStuffs", value: "Fun Stuffs" },
  { key: "contact", value: "Contact" },
];

export const projectItems = [
  {
    name: "Personal Website",
    description: "My Personal Website",
    url: "https://github.com/JCGonzaga01/jcgonzaga01.github.io",
    color: styles.blueBG,
    bgImg: assets.bannerBG,
  },
  {
    name: "TLCFM",
    description: "Tokyo Lighthouse Church Filipino Ministry",
    url: "https://tlcfm.herokuapp.com",
    color: styles.purpleBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/ministry%2FsaturdayBS%2FSaturdayBS1.jpg?alt=media&token=4ec2e620-db2d-4dfa-8386-3a61d2930a85",
  },
  {
    name: "TLCFM-Admin",
    description: "Tokyo Lighthouse Church Filipino Ministry - Admin",
    url: "https://tlcfm-admin.herokuapp.com",
    color: styles.orangeBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/home%2FbannerBG.jpg?alt=media&token=0ec30dd8-3f0e-488a-a3a6-fe6a30b213c3",
  },
];

export const prototypeProjectItems = [
  {
    name: "jcTV",
    description: "A Video on Demand application",
    url: "https://jctv-me.web.app",
    color: styles.greenBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/ministry%2FsaturdayBS%2FSaturdayBS1.jpg?alt=media&token=4ec2e620-db2d-4dfa-8386-3a61d2930a85",
  },
];
