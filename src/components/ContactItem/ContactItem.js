import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactItem.module.css';

const ContactItem = ({ item, onClickDelete }) => {
  return (
    <li className={Styles.item}>
      <h3>{item.name}:</h3>
      <h3>{item.number} </h3>
      <button
        type="button"
        id={item.id}
        onClick={onClickDelete}
        className={Styles.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactItem;
