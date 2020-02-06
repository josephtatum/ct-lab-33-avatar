import React from 'react';
import { useAvatar } from '../hooks/useAvatar';

export const CharacterDetail = ({ match }) => {
  const { characterList } = useAvatar();

  const character = characterList.find(character => {
    return character._id === match.params.id;
  });

  console.log(character);

  return (
    <>
      <p></p>
    </>
  );
};
