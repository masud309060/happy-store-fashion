import { 
  SIGN_IN_WITH_GOOGLE, 
  SIGN_IN_WITH_EMAIL_AND_PASSWORD, 
  SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE, 
  SIGN_UP_WITH_EMAIL_AND_PASSWORD, 
  SIGN_UP_WITH_EMAIL_AND_PASSWORD_FAILURE,
  SIGN_OUT,
  AUTH_STATE_CHANGE, 
} from "../types"

const initialState = {
  user: [],
  authorise: false,
  error: "",
}


export const authenticationReducers = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_IN_WITH_GOOGLE: return {
      ...state,
      user: action.payload.user,
      authorise: true,
      error: ""
    }
    case SIGN_UP_WITH_EMAIL_AND_PASSWORD: return {
      ...state,
      user: action.payload.user,
      error: action.payload.error,
      authorise: action.payload.authorise
    }
    case SIGN_UP_WITH_EMAIL_AND_PASSWORD_FAILURE: return {
      ...state,
      user: [],
      error: action.payload.error,
      authorise: action.payload.authorise
    }
    case SIGN_IN_WITH_EMAIL_AND_PASSWORD: return {
      ...state,
      user: action.payload.user,
      error: "",
      authorise: action.payload.authorise
    }
    case SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE: return {
      ...state,
      user: [],
      error: action.payload.error,
      authorise: action.payload.authorise
    }
    case SIGN_OUT: return {
      ...state,
      user: action.payload.user,
      error: action.payload.error,
      authorise: action.payload.authorise
    }
    case AUTH_STATE_CHANGE: return {
      ...state,
      user: action.payload.user,
      authorise: action.payload.authorise
    }

    default: return state
  }
} 