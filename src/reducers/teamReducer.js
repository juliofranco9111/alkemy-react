import { types } from '../types/types';

const initialState = {
  loading: false,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teamSetRandomHeros:
      return { ...state, ...action.payload, loading: false };

    case types.teamStartLoading:
      return { ...state, loading: true };

    case types.teamStopLoading:
      return { ...state, loading: false };

    default:
      return state;
  }
};
