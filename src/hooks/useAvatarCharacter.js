import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../services/getCharacter';

export const useAvatarCharacter = () => {

  const [character, setCharacter] = useState({});
  const params = useParams();
  useEffect(() => {
    getCharacter(params.id)
      .then(res => setCharacter(res));
  }, []);

  const updateCharacter = (id) => {
    getCharacter(id)
      .then(res => setCharacter(res));
  };

  return { character, updateCharacter };
};
