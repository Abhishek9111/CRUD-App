import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyCh2DP70jgHF_ccaHtURQtMI8EAoH4OZwk",
    authDomain: "react-contact9111.firebaseapp.com",
    projectId: "react-contact9111",
    storageBucket: "react-contact9111.appspot.com",
    messagingSenderId: "829583769455",
    appId: "1:829583769455:web:494996f4109b473da5f29a"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()