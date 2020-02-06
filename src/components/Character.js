import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Character = ({ name, image, id }) => {
  return (
    <li>
      <img src={image} />
      <p>{name}</p>
      <p><Link to={`/detail/${id}`}>View Detail</Link></p>
    </li>
  );
};

Character.proptypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
