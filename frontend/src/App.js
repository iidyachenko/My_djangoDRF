import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import ProjectList from "./components/Project";
import {HashRouter, Route, Link, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import ToDoList from "./components/ToDo";
import ProjectItem from "./components/ProjectItem";
import Project from "./components/ProjectItem";


const NotFound404 = ({ location }) => {
  return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState({users: users.results})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/')
        .then(response => {
            const projects = response.data
            this.setState({projects: projects.results})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
        .then(response => {
            const todo = response.data
            this.setState({todo: todo.results})
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="App">
          <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>Users</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
                <li>
                <Link to='/todo'>ToDo</Link>
              </li>
            </ul>
          </nav>
              <Switch>
                  <Route exact path='/' component={() => <UserList users={this.state.users} />}  />
                  <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />} />
                  <Route exact path='/todo' component={() => <ToDoList todo={this.state.todo} />} />
                  <Route exact path="/project/:name" component={() => <Project projects={this.state.projects} />} />


                  <Redirect from='/users' to='/' />
                  <Route component={NotFound404} />
            </Switch>
          </BrowserRouter>
        </div>
        )
    }
}

export default App;
