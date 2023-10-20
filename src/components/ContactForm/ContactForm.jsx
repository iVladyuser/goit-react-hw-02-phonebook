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
    // const contactSchema = Yup.object().shape({
    //   name: Yup.string()
    //     .matches(
    //       /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    //       'Invalid name format'
    //     )
    //     .min(3, 'Too Short!')
    //     .max(50, 'Too Long!')
    //     .required('This field is required!'),
    //   number: Yup.string()
    //   .matches(
    //     /^\+?\d{1,4}?[ .\\-\s]?\(?\d{1,3}?\)?[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,4}[ .\\-\s]?\d{1,9}$/,
    //     'Invalid number format'
    //   )
    //   .min(8, 'Too Short!').required('This field is required!'),
    // });
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
