import { types } from '../types/types';
import { fetchAuth } from '../helpers/fetchAuth';

export const startLogin = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchAuth(user);
    const body = await resp;
    if (body.status === 200) {
      const token = body['data'].token;

      localStorage.setItem('token', token);
      localStorage.setItem('email', user.email);
      dispatch(
        login({
          email: user.email,
          token,
        })
      );
      dispatch(stopLoading());
    } else {
      dispatch(stopLoading());
    }
  };
};

const login = (token) => ({
  type: types.authLogin,
  payload: token,
});

const startLoading = () => ({
  type: types.authStartLoading,
});

export const startChecking = () => {
  const token = localStorage.getItem('token') || null;
  const email = localStorage.getItem('email') || null;

  if (token && email) {
    return (dispatch) => {
      dispatch(startLoading());
      dispatch(
        login({
          email,
          token,
        })
      );
    };
  } else {
    return (dispatch) => {
      dispatch(stopLoading());
    };
  }
};

const stopLoading = () => ({ type: types.authStopLoading });

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
