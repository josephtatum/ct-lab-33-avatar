import React from 'react';
import { useAvatar } from '../hooks/useAvatar';
import { useAvatarCharacter } from '../hooks/useAvatarCharacter';
import { Character } from '../components/Character';
import { Pagination } from '../components/Pagination';

export const Characters = () => {
  const { characterList, page, nextPage } = useAvatar();
  const { updateCharacter } = useAvatarCharacter();
  const charactersToRender = characterList.map(character => {
    return <Character key={character._id} id={character._id} name={character.name} image={character.photoUrl} loadCharacter={updateCharacter} />;
  });

  return (
    <>
      <ul>
        {charactersToRender}
      </ul>
      <Pagination page={page} setPage={nextPage}/>
    </>
  );
};
