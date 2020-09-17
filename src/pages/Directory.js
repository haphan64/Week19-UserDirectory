import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import { Card, Container } from "react-bootstrap"

class Directory extends React.Component {

    state = {
        name: "",
        role: "",
        manager: "",
        users:[],
        search: ""
    }

    updateSearch = (search) => {        
        this.setState( {search} )
    }

    componentDidMount () {
        API
            .getUsers()
            .then( res => this.setState( { users: res.data.results } ) )
    }

    render () {
        return (
            <Container>

                <Card body>
                    <SearchForm updateSearch={this.updateSearch} />
                </Card>                
                
                <UserTable users = {this.state.users} />

             </Container>
        )
    }

}

export default Directory;