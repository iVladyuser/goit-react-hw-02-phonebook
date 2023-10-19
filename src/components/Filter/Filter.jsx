import React from 'react';
import css from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <div className={css.findContacts}>
    <label className={css.findContactsParagraph}>
      Find contacts by name
      <input
        className={css.findContactsInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
