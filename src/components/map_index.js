import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions'; //import the action function we will be using
import _ from 'lodash';
import { getUser } from './authentication';
class MapIndex extends Component {

    componentWillMount(){
    if(getUser()){
      //set user info to state
    } else {
      console.log('not good, user not logged in');
       this.props.history.push('/');
    }
  }

  componentDidMount() {
    this.props.fetchBooks();
  }
//Turn this into a table of book information
  renderBooks() {
    return _.map(this.props.books, book => {
      return (<li className='list-group-item' key={book.id}>
            {book.book_title} </li>
          );
    });
  }

  render() {

    return(
      <div className='container'>

      <h2 className='text-center'> Books </h2>
      <ul className='list-group'>
          {this.renderBooks()}
      </ul>

      </div>

    );
  };
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(MapIndex);

