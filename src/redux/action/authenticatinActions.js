import { auth, GoogleAuthProvider } from "../../firebase.config";
import { SIGN_IN_WITH_EMAIL_AND_PASSWORD, 
  SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE, 
  SIGN_IN_WITH_GOOGLE, 
  SIGN_UP_WITH_EMAIL_AND_PASSWORD, 
  SIGN_UP_WITH_EMAIL_AND_PASSWORD_FAILURE,  
  SIGN_OUT,
  AUTH_STATE_CHANGE
} from "../types";

export const singInWithGoogle = () => {

  return (dispatch) => {
    auth.signInWithPopup(GoogleAuthProvider)
    .then((result) => {
      const userData = result.user;
      dispatch({
        type: SIGN_IN_WITH_GOOGLE,
        payload: {
          user: userData,
        },
      })
    })
  }
}

const updateDisplayName = (name) => {
  const user = auth.currentUser;
  user.updateProfile({
    displayName: name
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}

export const signUpnWithEmailAndPassword = (name, email, password) => {
  return (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((data) => {
      const user = data.user;
      dispatch({
        type: SIGN_UP_WITH_EMAIL_AND_PASSWORD,
        payload: {
          user: user,
          error: "",
          authorise: true,
        },
      })
      updateDisplayName(name)
    })
    .catch((error) => {
      return dispatch => {
        dispatch({
          type: SIGN_UP_WITH_EMAIL_AND_PASSWORD_FAILURE,
          payload: {
            user: [],
            error: error,
            authorise: false,
          }
        })
      }
    });
  }
}

export const signInWithEmailAndPassword = (email, password) => {
  return dispatch => {
    auth.signInWithEmailAndPassword(email, password)
    .then((data) => {
      const user = data.user;
      dispatch({
        type: SIGN_IN_WITH_EMAIL_AND_PASSWORD,
        payload: {
          user: user,
          error: "",
          authorise: true,
        }
      })
    })
    .catch((error) => {
        dispatch({
          type: SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE,
          payload: {
            user: [],
            error: error.message,
            authorise: false,
          }
        })
    })
  }
}

export const signOut = () => {
  return dispatch => {
    auth.signOut().then(() => {
      dispatch({
        type: SIGN_OUT,
        payload: {
          user: [],
          authorise: false,
          error: ""
        }
      })
    }).catch((error) => {
      alert(error.message)
    });
  }
}

export const authStateChange = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch({
          type: AUTH_STATE_CHANGE,
          payload: {
            user: user,
            authorise: true
          }
        })
      } else {
        dispatch({
          type: AUTH_STATE_CHANGE,
          payload: {
            user: [],
            authorise: false
          }
        })
      }
    })
    
  }
}


