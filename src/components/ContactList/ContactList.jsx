// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactList extends Component {
    // static propTypes = { second: third }

    render() {
        const { contacts, handleDelete } = this.props
        return (
            <ul>{contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button
                        type="button"
                        id={contact.id}
                        onClick={handleDelete}
                    >
                        Delete</button>
                </li>
            ))}
            </ul>
        )
    }
}
