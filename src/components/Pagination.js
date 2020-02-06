import React from 'react';

export const Pagination = ({ page, setPage }) => {

  return (
    <>
      <p>Page {page}</p>
      {page > 1 ? <button onClick={() => setPage(page - 1)}>Previous</button> : ''}
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
};
