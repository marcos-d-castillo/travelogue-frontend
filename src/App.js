import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppNav from './components/AppNav'
import Map from './components/Map'
import AddLocationPage from './pages/AddLocationPage'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      id: 0,
      locations_visited: []
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/travelogue/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ 
            username: json.username, 
            id: json.id 
          });
          console.log(json)
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username,
          id: json.user.id,
          locations_visited: json.user.locations_visited
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/travelogue/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username,
          id: json.id,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    //function to render logout page. Covered previously in one of the last Newsite challenges.

    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>
          {localStorage.getItem('token')
            ? `Hello, ${this.state.username}`
            : ''}
        </h3>
        <BrowserRouter>
          <div>
            <AppNav
              logged_in={this.state.logged_in}
              username={this.state.username}
              id={this.state.id}
            />
            <hr />
            <Route exact path="/" render={(props) => <Map {...props} id={this.state.id} locations_visited={this.state.locations_visited}/>} />
            <Route exact path="/add-location" render={(props) => <AddLocationPage {...props} id={this.state.id}/>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
