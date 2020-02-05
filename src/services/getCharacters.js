export const getCharacters = (pgNum) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${pgNum}`)
    .then(res => res.json());
};
