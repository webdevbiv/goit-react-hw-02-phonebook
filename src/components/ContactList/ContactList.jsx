import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../ContactList/ContactList.module.scss'
function ContactList({ contacts, onDelete }) {
    return (
        <ListGroup>
            {contacts.map((contact) => (
                <ListGroup.Item
                    key={contact.id}
                    className={s.item}
                >
                    <div>{contact.name}: {contact.number}</div>
                    <Button variant="primary" type="button"
                        onClick={() => onDelete(contact.id)}
                    >
                        Delete</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList
