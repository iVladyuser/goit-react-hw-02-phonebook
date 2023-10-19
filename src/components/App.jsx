import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css'
import { ContactForm, ContactList, Filter } from 'components';

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Volodymyr Zelensky', number: '044 255–70–42' },
      { id: 2, name: 'Vitali Klitschko', number: '044 202-75-94' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleAddContact = newContact => {
    const isExist = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`Oops, contact '${newContact.name}' is already in contacts!`);
      return;
    }
    const readyToAddContact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, readyToAddContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
