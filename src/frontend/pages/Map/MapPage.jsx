import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './MapPage.css';

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBJGiy4hPyp2ese2DauiyY2crYaGoogG10"
    })

    return (
        <div className='map'>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{
                        lat: -22.902421,
                        lng: -43.258573
                    }}
                    zoom={15}

                >

                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
};

export default MapPage