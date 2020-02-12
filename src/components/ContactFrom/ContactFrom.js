import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactFrom.module.css';
import inputId from '../../services/helpers';

export default class ContactFrom extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = e => {
    e.preventDefault();
    this.props.handleSubmit(e);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={Styles.addContact} onSubmit={this.reset}>
        <label className={Styles.input} htmlFor={inputId.name}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            id={inputId.name}
            name="name"
            className={Styles.widthInput}
          />
        </label>
        <label className={Styles.input} htmlFor={inputId.number}>
          Number
          <input
            type="number"
            value={number}
            onChange={this.handleChange}
            id={inputId.number}
            name="number"
            className={Styles.widthInput}
          />
        </label>
        <button type="submit" className={Styles.widthBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
