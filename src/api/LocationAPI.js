  const addLocation = (locationObject) => {
      return fetch('http://localhost:8000/travelogue/locations/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`
        },
        method: 'POST',
        body: JSON.stringify(locationObject)
      })
    }
  
  export default {
    addLocation,
  }