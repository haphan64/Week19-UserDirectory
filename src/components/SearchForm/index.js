import React from 'react';
import { Button, Form } from "react-bootstrap"

function SearchForm (props) {

    return (

        <Form>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search By Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={e => props.updateSearch(e.target.value)}/>                
            </Form.Group>

            <Button variant="primary" type="submit" onClick = {e => e.preventDefault()}>
                Search
            </Button>

        </Form>

    );
}

export default SearchForm;