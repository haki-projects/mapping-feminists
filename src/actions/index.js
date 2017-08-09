export const FETCH_BOOKS = 'fetch_books';


import * as Firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAZ2uqM-PrIbo21LM1UG15Q05NkROZsIdE",
    authDomain: "mapping-feminists.firebaseapp.com",
    databaseURL: "https://mapping-feminists.firebaseio.com",
    projectId: "mapping-feminists",
    storageBucket: "mapping-feminists.appspot.com",
    messagingSenderId: "526879896757"
  };
  const email = 'dummyUser@gmail.com';
  const password = '123456';

Firebase.initializeApp(config);
const Books = Firebase.database();
const BooksRef = Firebase.database().ref('/');
const currentUser = Firebase.auth().currentUser;
  Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(" Could not log in the user: " , errorMessage);
     })

export function fetchBooks(){
     return (dispatch) => {
    BooksRef.on('value', snapshot => {
      dispatch({
        type: FETCH_BOOKS,
        payload: snapshot.val()
      });
    });
  };
}