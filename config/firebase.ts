import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAEIJipGq42ZA36jE-bHjsz_d-ZdGxfLSE",
    authDomain: "aviza-c9b82.firebaseapp.com",
    projectId: "aviza-c9b82",
    storageBucket: "aviza-c9b82.appspot.com",
    messagingSenderId: "161795910702",
    appId: "1:161795910702:web:47bae7daf2df1ffe4283bf"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp