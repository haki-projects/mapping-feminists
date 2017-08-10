const BAD_EMAIL = 'auth/invalid-email'; //Thrown if the email address is not valid
const USER_DISABLED = 'auth/user-disabled'; //Thrown if the user corresponding with the given email has been disabled
const NO_USER_FOUND = 'auth/user-not-found'; // thrown if there is no user corresponding to that given email
const WRONG_PASSWORD = 'auth/wrong-password'; // Thrown if the password is invalid for the given email or the account does not have a password set

export function getEmailPasswordError(error) {
  var errorMessage = 'Login successful';

  switch (error.code) {
    case BAD_EMAIL:
       errorMessage = 'This is not a valid email address. check the spelling';
    return errorMessage;

    case USER_DISABLED:
       errorMessage = 'Ooops, it looks like your account is disabled! You might want to look into that';
      return errorMessage;

    case NO_USER_FOUND:
        errorMessage = 'hmmm, it looks like you dont have an account with that username. Click the create account button below to get logged in';
      return errorMessage;

    case WRONG_PASSWORD:
     errorMessage = 'the email address looks good, but the password is off. Check to make sure you are entering the right password';
      return errorMessage;

      default:
      return null;
  };

};

