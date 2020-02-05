import { useState, useEffect } from 'react';
import { getCharacters } from '../services/avatar';


export const useAvatar = () => {

  const [characterList, setCharacterList] = useState();
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacters()
      .then(res => setCharacterList(res));
  }, []);

  return { characterList, character };
};
