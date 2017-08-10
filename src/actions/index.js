export const FETCH_BOOKS = 'fetch_books';
export const LOGIN_USER = 'login_user';
import { initializeAuth, bookDatabase } from '../components/authentication';
import { getEmailPasswordError } from '../utils/login_errors';

const email = 'dummyUser@gmail.com';
const password = '123456';
const Firebase = initializeAuth();
const BooksRef = bookDatabase();



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

export function loginUser( user) {
  return {
    type: LOGIN_USER,
    payload: user
  };

}