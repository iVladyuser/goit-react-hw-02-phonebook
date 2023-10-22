import React, { Component } from 'react';
import css from './ContactForm.module.css';
// import * as Yup from 'yup';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactSchema = {
      name: this.state.name,
      number:
        Number.parseFloat(this.state.number) || alert(`Number is not correct`),
    };
    this.props.onSubmit(contactSchema);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel} htmlFor="">
          <p className={css.labelText}>Name</p>
          <input
            className={css.formInput}
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label className={css.formLabel} htmlFor="">
          <p className={css.labelText}>Number</p>
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
