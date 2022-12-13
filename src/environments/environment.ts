
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  GIPHY_API_URL: "https://api.giphy.com/v1/gifs/search?api_key=GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK&q=",
  // GIPHY_API_KEY: "GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK",
  // a GIPHY_QUERY string will go inbetween these two so we can add our search term to api call.
  GIPHY_QUERY_FORMAT: "&limit=10&offset=0&rating=g&lang=en",
  // general structure: url + '&q=' + query_format
  GIPHY_API_KEY: "GBDcoDZ4L0s78U7Teq7rL1vpb9spD9MK",
  // FIREBASE_API_URL: "",
  // FIREBASE_API_KEY: "",
  firebase: {
    apiKey: "AIzaSyDinEBLKs2fcVgLT-T1t18M2Xpssfhs7KY",
    authDomain: "the-memeing-of-life.firebaseapp.com",
    projectId: "the-memeing-of-life",
    storageBucket: "the-memeing-of-life.appspot.com",
    messagingSenderId: "509608043786",
    appId: "1:509608043786:web:c873a0431ef99a851146f3",
    measurementId: "G-7P5NWJ3DP4"
}
};


/*
  // Usage of api for giphy

  import { query } from '@angular/animations';
  import { environment } from 'src/environments/environment';
  let q: string[] | null;
  const giphyCallUrl = `${environment.GIPHY_API_URL}${q}${environment.GIPHY_QUERY_FORMAT}`;

  */
