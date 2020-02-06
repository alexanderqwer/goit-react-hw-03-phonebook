import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

const Filter = ({ length, filterId, filter, handleChange }) => {
  return (
    <>
      {length > 1 && (
        <label className={Styles.findContact} htmlFor={filterId}>
          Find contacts by name
          <input
            type="text"
            id={filterId}
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
  filterId: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
