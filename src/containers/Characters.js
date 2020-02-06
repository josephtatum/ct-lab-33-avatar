import React from 'react';
import { useAvatar } from '../hooks/useAvatar';
import { Character } from '../components/Character';
import { Pagination } from '../components/Pagination';

export const Characters = () => {
  const { character, characterList, page, nextPage } = useAvatar();

  const charactersToRender = characterList.map(character => {
    return <Character key={character._id} id={character._id} name={character.name} image={character.photoUrl} />;
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
