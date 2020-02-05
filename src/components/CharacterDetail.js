import React from 'react';
import { useAvatar } from '../hooks/useAvatar';

export const CharacterDetail = ({ match }) => {

  console.log(match.params.id);

  return (
    <>
      <p>detail</p>
    </>
  );
};
