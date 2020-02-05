import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useAvatar = () => {

  const [characterList, setCharacterList] = useState([]);
  const [character, setCharacter] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page)
      .then(res => setCharacterList(res));
  }, []);

  const nextPage = (number) => {
    setPage(number);
    getCharacters(number)
      .then(res => setCharacterList(res));
  };

  return { characterList, character, page, nextPage };
};
