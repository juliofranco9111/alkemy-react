import { types } from '../types/types';

const initialState = {
  loading: false,
  heroes: null,
  sumStats: null,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teamSetRandomHeros:
      return { ...state, heroes: action.payload, loading: false };

    case types.teamStartLoading:
      return { ...state, loading: true };

    case types.teamStopLoading:
      return { ...state, loading: false };

    case types.teamSetSumStats:
      console.log
      return { ...state, sumStats: action.payload };
    default:
      return state;
  }
};
