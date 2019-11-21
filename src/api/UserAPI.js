const fetchUsers = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://protected-basin-44332.herokuapp.com/users`)
    .then((response) => response.json())
}

const fetchUserByID = (userID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://protected-basin-44332.herokuapp.com/users/${userID}`)
    .then((response) => response.json())
}

//   const addWine = (wineObject) => {
//     return fetch('https://cors-anywhere.herokuapp.com/https://protected-basin-44332.herokuapp.com/wines/', {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       method: 'POST',
//       body: JSON.stringify(wineObject)
//     })
//   }

export default {
  fetchUserByID,
  fetchUsers,
}