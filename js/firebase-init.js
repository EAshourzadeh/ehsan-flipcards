const firebaseConfig = {
  apiKey: "AIzaSyAP2qmqYqBfxDcXkw5HLHVGROnd-MfkSPM",
  authDomain: "ehsan-flipcards.firebaseapp.com",
  projectId: "ehsan-flipcards",
  storageBucket: "ehsan-flipcards.firebasestorage.app",
  messagingSenderId: "45980636400",
  appId: "1:45980636400:web:0c270192ac0c35a81a5e35",
  measurementId: "G-KBFS7DXQ40"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const firestoreDb = firebase.firestore();
