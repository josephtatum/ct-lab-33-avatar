import React from 'react';
import { Characters } from '../containers/Characters';
import { Pagination } from './Pagination';
import '../styles.css';

export default function App() {

  return (
    <>
      <Characters />
      <Pagination />
    </>
  );
}
