import { fetchHeroById } from '../helpers/fetchAuth';
import { Hero } from '../helpers/Hero';
import { types } from '../types/types';

export const getRandomTeam = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    let heroes = await getHeroes();

    const badHeroes = heroes.filter(
      (hero) => hero.biography.alignment === 'bad'
    );
    const goodHeroes = heroes.filter(
      (hero) => hero.biography.alignment === 'good'
    );

    dispatch({
      type: types.teamSetRandomHeros,
      payload: { goodHeroes, badHeroes },
    });
    dispatch(stopLoading());
  };
};

const getHeroes = async () => {
  let heroes = [];

  while (heroes.length < 6) {
    console.log(heroes.length);
    const { data } = await fetchHeroById(heroes.length + 2);
    console.log(data);

    const hero = new Hero(data);
    heroes.push(hero);
  }

  return heroes;
};

const startLoading = () => ({ type: types.teamStartLoading });
const stopLoading = () => ({ type: types.teamStopLoading });
