
import * as Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZ2uqM-PrIbo21LM1UG15Q05NkROZsIdE",
    authDomain: "mapping-feminists.firebaseapp.com",
    databaseURL: "https://mapping-feminists.firebaseio.com",
    projectId: "mapping-feminists",
    storageBucket: "mapping-feminists.appspot.com",
    messagingSenderId: "526879896757"
  };

const firebaseInstance = Firebase.initializeApp(config);

  firebaseInstance.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user logged in!', user);
    return user;
  } else {

    return false;
  }
});



export function initializeAuth() {
  return firebaseInstance;
}

export function bookDatabase() {
  return firebaseInstance.database().ref('/');

}

export function isUserLoggedIn() {
  const user =  firebaseInstance.auth().currentUser;
}

export function getUser() {
  return firebaseInstance.auth().currentUser;
}