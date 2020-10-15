import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Spinner from "components/Spinner";
import router from "_root/router";
import "./index.scss";

// Firebase initialization
// Create this config with the same directory of index.tsx
// import { firebaseConfig } from "firebaseConfig";

// import * as firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = <Suspense fallback={<Spinner />}>{router}</Suspense>;

ReactDOM.render(app, document.getElementById("root"));
