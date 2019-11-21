import React, {useState} from 'react'
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import CityPin from './CityPin'


const Map = (props) => {


    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "90vh",
    })

    const [selectedLocation, setSelectedLocation] = useState(null)

    return (
        <div>
            <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/marumarumaru/ck34ppm5u4wtq1cmmnowi394f"
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
            >
            {props.locations_visited.map(location => (
                 <Marker 
                 key={location.id} 
                 latitude={parseFloat(location.latitude)} 
                 longitude={parseFloat(location.longitude)}
                 >
                    <div
                     className='marker-div' 
                     onClick={e => {
                        e.preventDefault()
                        setSelectedLocation(location)
                    }}
                >
                        <CityPin />
                    </div>
                </Marker>
            ))}
            {selectedLocation ? (
                <Popup 
                latitude={parseFloat(selectedLocation.latitude)} longitude={parseFloat(selectedLocation.longitude)}
                onClose={() => {
                    setSelectedLocation(null)
                }}
            >
                    <div>
                        <h2>{selectedLocation.name}</h2>
                        <img src={selectedLocation.pic_url} alt="whoops" height="150" width="200"/>
                    </div>
                </Popup>
            ) : null}
            </ReactMapGL>
        </div>
    )
}

export default Map
