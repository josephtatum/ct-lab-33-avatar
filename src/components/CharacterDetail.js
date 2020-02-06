import React from 'react';
import { useAvatar } from '../hooks/useAvatar';
import { useAvatarCharacter } from '../hooks/useAvatarCharacter';

export const CharacterDetail = () => {
  const { character } = useAvatarCharacter();
  console.log(character);
  return (
    <>
      <p>{character.name}</p>
    </>
  );
};
