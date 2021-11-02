import { fetchHeroById } from '../helpers/fetchAuth';
import { Hero } from '../helpers/Hero';
import { types } from '../types/types';

export const getRandomTeam = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    const team = localStorage.getItem('team');
    if (team) {
      const teamStored = JSON.parse(team);
      const stats = getSumStats(teamStored);

      dispatch(setSumStats(stats));
      dispatch({
        type: types.teamSetRandomHeros,
        payload: teamStored,
      });
      dispatch(stopLoading());
    }else{
      const heroes = await getHeroes();
      localStorage.setItem('team', JSON.stringify(heroes));
      const stats = getSumStats(heroes);

      dispatch({
        type: types.teamSetRandomHeros,
        payload: { heroes },
      });      
      dispatch(setSumStats(stats));
      dispatch(stopLoading());
    }
  };
};

const getHeroes = async () => {
  let heroes = [];
  while (heroes.length < 6) {
    const { data } = await fetchHeroById(heroes.length + 1);
    const hero = new Hero(data);
    heroes.push(hero);
  }

  return heroes;
};

const getSumStats = (array) => {
  const stats = {
    intelligence: 0,
    strength: 0,
    power: 0,
    durability: 85,
    speed: 85,
    combat: 85,
  };

  array.forEach(({ powerstats }) => {
    stats.intelligence += +powerstats.intelligence;
    stats.strength += +powerstats.strength;
    stats.power += +powerstats.power;
    stats.durability += +powerstats.durability;
    stats.speed += +powerstats.speed;
    stats.combat += +powerstats.combat;
  });

  return stats;
};

const setSumStats = (stats) => ({ type: types.teamSetSumStats, payload: stats });
const startLoading = () => ({ type: types.teamStartLoading });
const stopLoading = () => ({ type: types.teamStopLoading });
