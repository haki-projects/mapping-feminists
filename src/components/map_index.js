import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions'; //import the action function we will be using
import _ from 'lodash';

class MapIndex extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return _.map(this.props.books, book => {
      return (<li className='list-group-item' key={book.id}>
            {book.book_title} </li>
          );
    });
  }

  render() {

    return(
      <div>

      Add navbar here
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

