import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import Styles from './ContactList.module.css';

const ContactList = ({ filterContacts, onClickDelete }) => {
  return (
    <ul className={Styles.list}>
      {filterContacts().map(item => {
        return (
          <ContactItem
            item={item}
            onClickDelete={onClickDelete}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactList;
