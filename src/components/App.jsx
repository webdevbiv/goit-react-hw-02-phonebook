// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import { nanoid } from 'nanoid'

export default class App extends Component {
  // static propTypes = {second: third}
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  handleContactSubmit = ({ name, number }) => {
    const contacts = this.state.contacts
    const newContact = { name, number, id: nanoid(5) }
    this.setState({ contacts: [...contacts, newContact] })
  }

  handleContactDelete = (e) => {
    const id = e.target.id
    const contacts = this.state.contacts
    console.log(id);
    this.setState({ contacts: contacts.filter(item => item.id !== id) })
  }

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleContactSubmit} />
          <h2>Contacts</h2>
          {/* <Filter /> */}
          <ContactList contacts={this.state.contacts} handleDelete={this.handleContactDelete} />
        </div>
      </>
    )
  }
}
