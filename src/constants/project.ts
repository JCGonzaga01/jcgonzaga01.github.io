import styles from "helpers/stylings/global.scss";
import assets from "assets";

// NOTE:
// For 'bgImg' props, you can select predetermined colors in "helpers/stylings/global.scss";
// Kindly update this helper file as well on your preference color scheme.

type ProjectItemProps = {
  name: string;
  description: string;
  url: string;
  target: string;
  color: string;
  bgImg: string;
};

const liveProjectItems: Array<ProjectItemProps> = [
  {
    name: "jcgonzaga.io",
    description: "Source code of My Personal Website",
    url: "https://github.com/JCGonzaga01/jcgonzaga01.github.io",
    target: "_blank",
    color: styles.blueBG,
    bgImg: assets.bannerBG,
  },
  {
    name: "TLCFM",
    description: "Tokyo Lighthouse Church Filipino Ministry - Website",
    url: "https://tlcfm.herokuapp.com",
    target: "_blank",
    color: styles.greenBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/ministry%2FsaturdayBS%2FSaturdayBS1.jpg?alt=media&token=4ec2e620-db2d-4dfa-8386-3a61d2930a85",
  },
  {
    name: "TLCFM-ADMIN",
    description: "Tokyo Lighthouse Church Filipino Ministry - Admin Site",
    url: "https://tlcfm-admin.herokuapp.com",
    target: "_blank",
    color: styles.purpleBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/tlcfm-japan.appspot.com/o/home%2FbannerBG.jpg?alt=media&token=0ec30dd8-3f0e-488a-a3a6-fe6a30b213c3",
  },
  {
    name: "JC REACT BOILERPLATE",
    description: "A React Boilerplate alternative for CRA.",
    url: "https://github.com/JCGonzaga01/jc-react-boilerplate",
    target: "_blank",
    color: styles.orangeBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/projects%2FjcReactBoilerplate.png?alt=media&token=5f90182e-400d-4d61-aea0-2f770690aba7",
  },
];

const prototypeProjectItems: Array<ProjectItemProps> = [
  {
    name: "jcTV",
    description: "A Video on Demand application",
    url: "https://github.com/JCGonzaga01/jcTV",
    target: "_blank",
    color: styles.blueBG,
    bgImg:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/projects%2FjcTV.png?alt=media&token=e402b78f-fc3a-4ce7-8f84-a039c18b29e5",
  },
];

export const projectDetails = {
  title: "PROJECTS",
  details: [
    {
      elementId: "liveProjectsDivId",
      name: "LIVE PROJECTS",
      icon: assets.live,
      items: liveProjectItems,
    },
    {
      elementId: "prototypeProjectsDivId",
      name: "PROTOTYPE PROJECTS",
      icon: assets.prototype,
      items: prototypeProjectItems,
    },
  ],
};
