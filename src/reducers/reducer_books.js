//Import action creators
import { FETCH_BOOKS } from '../actions';
import _ from 'lodash';

export default function(state= {}, action) {

   switch (action.type) {
    case FETCH_BOOKS:
    return _.mapKeys(action.payload, 'id');

    default:
    return state;
  };
}