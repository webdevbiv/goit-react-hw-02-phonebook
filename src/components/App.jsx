// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import { nanoid } from 'nanoid'

export default class App extends Component {
  state = {
    contacts: [],
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
