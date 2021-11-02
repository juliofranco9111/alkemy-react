import axios from 'axios';

const URLAuth = 'http://challenge-react.alkemy.org/';
const URLApi = 'https://www.superheroapi.com/api.php/10224541060347055/';

export const fetchAuth = (user) => {
  return axios
    .post(URLAuth, {
      email: user.email,
      password: user.password,
    })
    .then((r) => r)
    .catch((err) => err);
};

export const fetchHeroById = (id) => {
  return  axios
    .get(URLApi + id)
    .then((r) => r)
    .catch((err) => err);
}

export const fetchHeroesByName = (name) => {
  return axios
    .get(URLApi + 'search/' + name)
    .then((r) => r)
    .catch((err) => err);
}
