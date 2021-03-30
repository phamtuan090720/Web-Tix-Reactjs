import * as ActionTypes from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
  isAler:false,
};

const RegisterUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.registerUserRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      state.isAler=false;
      return { ...state };
    case ActionTypes.registerUserSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      state.isAler=true;
      return { ...state };
    case ActionTypes.registerUserFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default RegisterUserReducer;
