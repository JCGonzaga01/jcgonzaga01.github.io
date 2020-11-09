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
    // url: "https://jctv-me.web.app",
    url: "https://github.com/JCGonzaga01/jcTV",
    color: styles.greenBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/projects%2FjcTV.png?alt=media&token=e402b78f-fc3a-4ce7-8f84-a039c18b29e5",
  },
];

export const linkImg = {
  baguiotrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fbaguio-trip%2Fbanner.jpg?alt=media&token=64e5b980-c0f8-4384-8458-91e3f22b8332",
  naganotrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fnagano-trip%2Fbanner.jpg?alt=media&token=a7079352-e5f8-47d8-80bd-23d68f53f8d0",
  osakatrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fosaka-trip%2Fbanner.jpg?alt=media&token=595c045d-ae65-4304-824a-73b46aed619d",
  sgtrip:
    "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fsg-trip%2Fbanner.jpg?alt=media&token=c09977cb-1bca-4491-82fd-32cb086d771c",
};

export const travelList = [
  {
    banner: linkImg.baguiotrip,
    title: "Baguio, PH",
  },
  {
    banner: linkImg.naganotrip,
    title: "Nagano, JP",
  },
  {
    banner: linkImg.osakatrip,
    title: "Osaka, JP",
  },
  {
    banner: linkImg.sgtrip,
    title: "Singapore, SG",
  },
];
