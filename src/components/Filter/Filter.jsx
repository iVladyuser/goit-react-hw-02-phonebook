import React from 'react';
// import css from './Filter.module.css'
const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
