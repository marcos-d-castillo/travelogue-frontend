const fetchLocations = () => {
    return fetch(`http://localhost:8000/locations`)
      .then((response) => response.json())
  }
  
  const fetchLocationByID = (locationID) => {
    return fetch(`http://localhost:8000/locations/${locationID}`)
      .then((response) => response.json())
  }
  
  const addLocation = (locationObject) => {
    return fetch('http://localhost:8000/locations/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(locationObject)
    })
  }
  
  export default {
    fetchLocationByID,
    fetchLocations,
    addLocation
  }