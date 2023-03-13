import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { nanoid } from 'nanoid'
export default class App extends Component {
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
      // alert(`${name} is already in the contacts.`);
      toast.warn(`🦄 ${name} is already in the contacts.`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      const newContact = { name, number, id: nanoid(5) }
      this.setState((prev) => ({ contacts: [newContact, ...prev.contacts] }))
    }
  }

  handleContactDelete = (id) => {
    this.setState((prev) => ({ contacts: prev.contacts.filter(item => item.id !== id) }))

  }

  handleFilterChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  filteredContacts = () => {
    const { contacts, filter } = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const { filter, contacts } = this.state
    // console.log(contacts.length);
    return (
      <div className={'container'}>
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          theme="light"
        />
        <h1 className={'title'}>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactSubmit} />
        <h2 className={'title'}>Contacts</h2>
        <>
          <Filter onChange={this.handleFilterChange} />
          <ContactList
            contacts={!filter.length ? contacts : this.filteredContacts()}
            onDelete={this.handleContactDelete}
          />
        </>
      </div>
    )
  }
}
