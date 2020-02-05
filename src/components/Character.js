import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ name, image }) => {
  return (
    <li>
      <img src={image} />
      <p>{name}</p>
    </li>
  );
};

Character.proptypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
