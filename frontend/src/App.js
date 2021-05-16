import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <HeaderComp />
                <UserList users={this.state.users}/>
                <FooterComp />
            </div>
        )
    }
}

export default App;