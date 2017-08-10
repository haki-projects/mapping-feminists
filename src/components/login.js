import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import { getEmailPasswordError, showErrorMessage } from '../utils/login_errors';
import { initializeAuth } from '../components/authentication';
import { Spinner } from '../components/common/spinner';

const Firebase = initializeAuth();

class Login extends Component {

  state = {
    error_message: '', loading: false };

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
      return (
        <div className={className}>
        <label>{field.label}</label>
        <input className='form-control'
        type={field.type}
        {...field.input}

        />
        <div className='text-help'>
        {field.meta.touched ? field.meta.error: ''}
        </div>
        </div>
      );
  }
    renderButton() {

    }
    loginSuccess(user) {
      console.log('we logged in!', user);
      this.props.loginUser(user)
    }

  onSubmit(values) {
    this.setState({ error_message: '', loading: true });
    Firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    .then(this.loginSuccess.bind(this))
    .catch( (error) => {
      const errorMessage = getEmailPasswordError(error);
      console.log(errorMessage); //output error message somewhere
    });

  }

  render(){
    const { handleSubmit } = this.props;


    return (
      <div className='row text-center justify-content-center'>
        <div className='col-6'>
      <div className='card'>
        <h2 className='card-header'> Student Login </h2>
        <img className='card-img-top' src='...' alt='card image cap'/>
        <div className='card-block'>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label='Email'
              name='email'
              type='email'
              component={this.renderField}
              />
              <Field
              label='Password'
              name='password'
              type='password'
              component={this.renderField}
              />

             <button type='submit' className='btn btn-primary'>Login</button>

            <div className='card-block'>
              <Link to='/'>Forgot Username</Link>
              <Link to='/'>Forgot Password</Link>
            </div>
            <div className='has-danger'>
              {this.state.error_message}
            </div>
      </form>
        </div>
        </div>
        </div>
        </div>


    );
  };
}

function validate(values){
  const errors={};
  return errors;
}

function mapStateToProps({ user }) {
  return { current_user: user };
}

export default reduxForm({validate,form: 'LoginUserForm'})
(connect(mapStateToProps, { loginUser })(Login)) ;