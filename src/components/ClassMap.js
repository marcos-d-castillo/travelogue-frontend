import React, { Component } from 'react'
import ReactMapGL, { Marker } from "react-map-gl"
import CityPin from './CityPin'


class ClassMap extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                width: "100vw",
                height: "90vh",
            }
        }
    }

    
        render (){
            return (
                <div>
                    <ReactMapGL 
                    {...this.state.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/marumarumaru/ck34ppm5u4wtq1cmmnowi394f"
                    onViewportChange={viewport => {
                        this.setState({viewport})
                    }}
                    >
                    {this.props.locations_visited.map((location) => (
                        <Marker key={location.id} latitude={parseFloat(location.latitude)} longitude={parseFloat(location.longitude)}>
                            <div>
                                <CityPin />
                            </div>
                        </Marker>
                    ))}
                    </ReactMapGL>
                </div>
            )
        }
}

export default ClassMap
