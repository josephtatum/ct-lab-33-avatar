import React from 'react';
import { Link } from 'react-router-dom';
import { useAvatar } from '../hooks/useAvatar';
import { useAvatarCharacter } from '../hooks/useAvatarCharacter';

export const CharacterDetail = () => {
  const { character } = useAvatarCharacter();
  console.log(character);
  return (
    <>
      <img src={character.photoUrl} />
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <p><Link to="/">Return Home</Link></p>
    </>
  );
};
