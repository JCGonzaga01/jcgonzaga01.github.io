import assets from "assets";

const travelItems = [
  {
    banner:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fbaguio-trip%2Fbanner.jpg?alt=media&token=64e5b980-c0f8-4384-8458-91e3f22b8332",
    title: "Baguio, PH",
  },
  {
    banner:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fnagano-trip%2Fbanner.jpg?alt=media&token=a7079352-e5f8-47d8-80bd-23d68f53f8d0",
    title: "Nagano, JP",
  },
  {
    banner:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fosaka-trip%2Fbanner.jpg?alt=media&token=595c045d-ae65-4304-824a-73b46aed619d",
    title: "Osaka, JP",
  },
  {
    banner:
      "https://firebasestorage.googleapis.com/v0/b/jcgonzaga01githubio.appspot.com/o/funstuffs%2Ftravels%2Fsg-trip%2Fbanner.jpg?alt=media&token=c09977cb-1bca-4491-82fd-32cb086d771c",
    title: "Singapore, SG",
  },
];

export const funStuffsDetails = {
  title: "FUN STUFFS",
  details: [
    {
      name: "TRAVELS",
      icon: assets.travels,
      items: travelItems,
    },
  ],
};
