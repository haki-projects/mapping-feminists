import { LOGIN_USER } from '../actions';
import _ from 'lodash';

export default function(state= {}, action) {
  switch (action.type) {
    case LOGIN_USER:
    return action.payload ;

    default:
    return state;
  }
}