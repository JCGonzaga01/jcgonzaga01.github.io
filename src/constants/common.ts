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
    name: "jcgonzaga.io",
    description: "Source code of My Personal Website",
    url: "https://github.com/JCGonzaga01/jcgonzaga01.github.io",
    color: styles.blueBG,
    bgImg: assets.bannerBG,
  },
  {
    name: "TLCFM",
    description: "Tokyo Lighthouse Church Filipino Ministry Website",
    url: "https://tlcfm.herokuapp.com",
    color: styles.purpleBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/ministry%2FsaturdayBS%2FSaturdayBS1.jpg?alt=media&token=4ec2e620-db2d-4dfa-8386-3a61d2930a85",
  },
  {
    name: "TLCFM-ADMIN",
    description: "Tokyo Lighthouse Church Filipino Ministry - Admin Site",
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
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/projects%2FjcTV.png?alt=media&token=e402b78f-fc3a-4ce7-8f84-a039c18b29e5",
  },
];

export const linkImg = {
  naganotrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Fnagano-trip%2Fbanner.jpg?alt=media&token=29e87f77-da79-4bae-a351-49dcb90bbe13",
  osakatrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Fosaka-trip%2Fbanner.jpg?alt=media&token=0404a6ee-8681-454f-8743-b901f54fc4bc",
  sgtrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Fsg-trip%2Fbanner.jpg?alt=media&token=c3d9acd5-65bf-4679-93b9-39055b962734",
};

export const travelList = [
  {
    banner: linkImg.naganotrip,
    title: "Nagano Trip",
  },
  {
    banner: linkImg.osakatrip,
    title: "Osaka Trip",
  },
  {
    banner: linkImg.sgtrip,
    title: "Singapore Trip",
  },
];
