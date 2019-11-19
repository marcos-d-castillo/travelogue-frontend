import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import LocationAPI from '../api/LocationAPI.js'
import { Redirect } from 'react-router'

class AddLocationPage extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault()
    const locationObject = {
      name: event.target.elements[0].value,
      latitude: event.target.elements[2].value,
      longitude: event.target.elements[1].value,
      pic_url: event.target.elements[3].value
    }
    console.log(locationObject)
    LocationAPI.addLocation(locationObject)
      .then((_response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="name">
            <Form.Label>Location Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Longitude</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddLocationPage