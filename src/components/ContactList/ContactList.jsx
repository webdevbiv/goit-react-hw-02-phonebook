import React from 'react'
import PropTypes from 'prop-types'
function ContactList({ contacts, onDelete }) {
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

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList
