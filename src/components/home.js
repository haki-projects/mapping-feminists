import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import _ from 'lodash';

class Home extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }



  render() {

    return(
      <div>
      <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Mapping Feminism</h1>
        <p>Discover how feminist theory has evolved</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Sign In &raquo;</a></p>
      </div>
    </div>





<footer className="container-fluid text-center">
  <p>Footer Text</p>
</footer>






      </div>

    );
  };
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(Home);

