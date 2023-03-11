// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactList extends Component {
    // static propTypes = { second: third }

    render() {
        const { contacts, onDelete } = this.props
        console.log(contacts);
        return (
            <ul>{contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button
                        type="button"
                        onClick={() => onDelete(contact.id)}
                    >
                        Delete</button>
                </li>
            ))}
            </ul>
        )
    }
}
