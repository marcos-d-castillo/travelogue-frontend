import React, {useState} from 'react'
import ReactMapGL, { Marker } from "react-map-gl"


export default function Map() {


    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "90vh",
    })

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
                {/* {this.props.locations_visited.map((location) => (
                    <Marker key={location.id}>
                        <div>Hey!</div>
                    </Marker>
                ))} */}
            </ReactMapGL>
        </div>
    )
}
