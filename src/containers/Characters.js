import React from 'react';
import { useAvatar } from '../hooks/useAvatar';
import { Character } from '../components/Character';

export const Characters = () => {
  const { character, characterList } = useAvatar();

  const charactersToRender = characterList.map(character => {
    return <Character key={character._id} name={character.name} image={character.photoUrl} />;
  });

  return (
    <ul>
      {charactersToRender}
    </ul>
  );
};
