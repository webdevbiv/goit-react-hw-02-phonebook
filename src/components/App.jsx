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
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in the contacts.`)
    }
    else {
      const newContact = { name, number, id: nanoid(5) }
      this.setState({ contacts: [...contacts, newContact] })
    }
  }

  handleContactDelete = (id) => {
    const contacts = this.state.contacts
    this.setState({ contacts: contacts.filter(item => item.id !== id) })
  }

  handleFilterChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  filteredContacts = () => {
    const { contacts, filter } = this.state
    let filteredContacts = contacts
    console.log(filter.length);
    filter.length < 0 ?
      filteredContacts = contacts
      : filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return filteredContacts
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filteredContacts()}
          onDelete={this.handleContactDelete}
        />
      </>
    )
  }
}
