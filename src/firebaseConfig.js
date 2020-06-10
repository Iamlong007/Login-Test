import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxwseoN0KdE_8VhZxE9FcrdJL1h8JzZB0",
  authDomain: "login-app-7739b.firebaseapp.com",
  databaseURL: "https://login-app-7739b.firebaseio.com",
  projectId: "login-app-7739b",
  storageBucket: "login-app-7739b.appspot.com",
  messagingSenderId: "848065122734",
  appId: "1:848065122734:web:35823f30eb06338833f83f",
  measurementId: "G-LHGCENV57S"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser


// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')


export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}