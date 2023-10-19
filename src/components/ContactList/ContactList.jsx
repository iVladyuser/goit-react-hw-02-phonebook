import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          <div className={css.container}>
            <div className={css.contactWrapper}></div>
            <p className={css.contact}>{name}</p>
            <p className={css.contact}>{number}</p>

            <button
              className={css.contactButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
