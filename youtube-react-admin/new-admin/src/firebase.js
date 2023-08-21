
// import firebase from "firebase";
// import "firebase/storage";



// const firebaseConfig = {
//   apiKey: "AIzaSyAPygekD7wQFzuG24JtXmBnLv2YEt6bjO0",
//   authDomain: "netflix-8531c.firebaseapp.com",
//   projectId: "netflix-8531c",
//   storageBucket: "netflix-8531c.appspot.com",
//   messagingSenderId: "79627912552",
//   appId: "1:79627912552:web:ccb6f2e9611c834c4342dd",
//   measurementId: "G-V4R6QRJXYE"
// };


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const storage = firebase.storage();
// export { storage, firebase as default };

import firebase from "firebase/app";
import "firebase/storage";
import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAPygekD7wQFzuG24JtXmBnLv2YEt6bjO0",
      authDomain: "netflix-8531c.firebaseapp.com",
      projectId: "netflix-8531c",
      storageBucket: "netflix-8531c.appspot.com",
      messagingSenderId: "79627912552",
      appId: "1:79627912552:web:ccb6f2e9611c834c4342dd",
      measurementId: "G-V4R6QRJXYE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
export default storage;