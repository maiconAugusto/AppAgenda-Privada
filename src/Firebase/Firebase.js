import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQ5NPWOyRZpkJfbgOpwiXDAq6M-gJ2yq4",
    authDomain: "reactnativetest-1d8e8.firebaseapp.com",
    databaseURL: "https://reactnativetest-1d8e8.firebaseio.com",
    projectId: "reactnativetest-1d8e8",
    storageBucket: "reactnativetest-1d8e8.appspot.com",
    messagingSenderId: "147335287255",
    appId: "1:147335287255:web:2a3ca5f70b5b10b4"
  }; 
  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

 