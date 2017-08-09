import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import _ from 'lodash';

class Student extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }



  render() {

    return(
      <div>

      Student section


      </div>

    );
  };
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(Student);

