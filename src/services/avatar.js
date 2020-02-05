export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?page=1')
    .then(res => res.json());
};
