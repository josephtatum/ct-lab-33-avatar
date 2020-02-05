import React from 'react';
import { useAvatar } from '../hooks/useAvatar';

export const Pagination = ({page, setPage}) => {

  return (
    <>
      <p>Page {page} of Something</p>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
};
