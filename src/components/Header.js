import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <>
      <h1><Link to="/">Avatar Characters</Link></h1>
      {location.pathname === '/' ? null : <p>Return</p>}
    </>
  );
};
