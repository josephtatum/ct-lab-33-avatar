import React from 'react';
import { Characters } from '../containers/Characters';
import { useAvatar } from '../hooks/useAvatar';

export default function App() {
  
  const { character, characterList } = useAvatar();
  console.log(characterList);
  return (
    <Characters characterList={characterList}/>
  );
}
