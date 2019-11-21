import React from 'react'
import { Link } from 'react-router-dom'

function AppNav(props) { 

  return (
    <div>
      <nav>
        <b key={'home'}><Link to={'/'}> travelogue </Link></b>
        {localStorage.getItem('token') && <b key={'add'}><Link to={`/add-location`}>| add location</Link></b>}
      </nav>
    </div>
  )
}

export default AppNav;
