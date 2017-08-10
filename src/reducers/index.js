import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from '../reducers/reducer_user';
import BooksReducer from '../reducers/reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer,
   form: formReducer,
  current_user: UserReducer
});

export default rootReducer;
