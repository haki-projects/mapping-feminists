import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import { fire } from './authentication';
import _ from 'lodash';
import * as firebase from 'firebase';
import { getUser } from './authentication';
import Login from './login';

class Home extends Component {

  componentWillMount(){
    if(getUser()){
      //set user info to state
    } else {
     //Show login component
    }
  }

  componentDidMount() {
    console.log('insite componentdidmount')


    //isUserLoggedIn();
    this.props.fetchBooks();
  }





  render() {

function pushToMap() {
  console.log('seeing if pushtomap gets called');
    this.props.history.push('/map');
  }

    return(
      <div>
      <div className="jumbotron text-center">
      <div className="container">
        <h1 className="display-3">Mapping Feminism</h1>
        <p>Discover how feminist theory has evolved</p>

        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn More</a></p>
      </div>
    </div>
          <div className='container'>
              <Login pushToMap = { () => this.pushToMap } />
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

