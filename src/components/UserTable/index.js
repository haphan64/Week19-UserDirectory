import React from 'react';
import { Table } from "react-bootstrap";

function UserTable (props) {
    
    return (

        <Table striped bordered hover>
            <thead>
                <tr>                    
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Location</th>                                 
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return (
                        <tr>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.city}, {user.location.state}</td>
                        </tr>
                    )  
                })}
                
            </tbody>

        </Table>

    )

}

export default UserTable;