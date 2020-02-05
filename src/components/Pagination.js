import React from 'react';

export const Pagination = ({ currentPage, totalPages }) => {
  return (
    <p>Page {currentPage} of {totalPages}</p>
  );
};
