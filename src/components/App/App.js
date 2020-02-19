import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactFrom/ContactFrom';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const local = localStorage.getItem('contacts');
    if (local !== null) {
      this.setState({ contacts: JSON.parse(local) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = e.target.elements;
    const { contacts } = this.state;
    const itemContact = {
      id: shortid.generate(),
      name: name.defaultValue,
      number: number.defaultValue,
    };

    if (contacts.find(item => item.name === name.defaultValue)) {
      // eslint-disable-next-line no-alert
      alert(`${name.defaultValue} is allready in contacts. `);
    } else {
      this.setState({ contacts: [...contacts, itemContact] });
    }
  };

  deleteContact = e => {
    const { id } = e.target;
    const { contacts } = this.state;
    const filter = contacts.filter(item => item.id !== id);
    this.setState({ contacts: filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h3 className={Styles.allTitle}>Phonebook</h3>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h3 className={Styles.allTitle}>Contacts</h3>
        <Filter
          length={contacts.length}
          filter={filter}
          handleChange={this.handleChange}
        />
        <ContactList
          filterContacts={this.filterContacts}
          onClickDelete={this.deleteContact}
        />
      </div>
    );
  }
}
