
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqtl6o4VbPbhE3D0MD2WgzrOg4YYDbpwA",
    authDomain: "fir-login-dcda3.firebaseapp.com",
    projectId: "fir-login-dcda3",
    storageBucket: "fir-login-dcda3.appspot.com",
    messagingSenderId: "920056442162",
    appId: "1:920056442162:web:433778c5d1fcf048ccbb2b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }
