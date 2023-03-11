// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import { nanoid } from 'nanoid'

export default class App extends Component {
  // static propTypes = {second: third}
  state = {
    contacts: [],
    filter: ''
  }

  handleContactSubmit = ({ name, number }) => {
    const contacts = this.state.contacts
    const newContact = { name, number, id: nanoid(5) }
    this.setState({ contacts: [...contacts, newContact] })
  }

  handleContactDelete = (e) => {
    console.log(e);
    const key = e.target.key
    console.log(e.target);
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
