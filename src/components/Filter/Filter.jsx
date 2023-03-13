import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
function Filter({ onChange }) {
    return (
        <Form.Group className="mb-3" >
            <Form.Label>Find contacts by name</Form.Label>
            <Form.Control
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={onChange}
            />
        </Form.Group>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Filter