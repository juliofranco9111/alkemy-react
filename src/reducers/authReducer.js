import { types } from '../types/types';

const initialState = {
  userAuth: false,
  checking: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        userAuth: true,
        checking: false,
      };

    case types.authStartLoading:
      return { ...state, checking: true };
    case types.authStopLoading:
        return { ...state, checking: false };

    case types.authLogout:
      return {};

    default:
      return state;
  }
};
