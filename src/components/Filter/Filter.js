import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';
import inputId from '../../services/helpers';

const Filter = ({ length, filter, handleChange }) => {
  return (
    <>
      {length > 1 && (
        <label className={Styles.findContact} htmlFor={inputId.filter}>
          Find contacts by name
          <input
            type="text"
            id={inputId.filter}
            value={filter}
            onChange={handleChange}
            name="filter"
          />
        </label>
      )}
    </>
  );
};
Filter.propTypes = {
  length: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
