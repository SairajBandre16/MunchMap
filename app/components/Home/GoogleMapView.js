import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'
import { UserLocationContext } from '@/context/UserLocationContext'
import React, { useContext } from 'react'
import Markers from './Markers'

function GoogleMapView({businessList}) {
    const {userLocation,setUserLocation} = useContext(UserLocationContext)
    const ContainerStyle = {
        width:"100%",
        height:"70vh"
    }
    const cordinate = {lat: -34.397, lng: 150.44}
    console.log(userLocation)
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        // mapIds={['327f00d9bd231a33']}
      >
      <GoogleMap
        mapContainerStyle={ContainerStyle}
        center={userLocation}
        zoom={16}
        // options={{mapId:'327f00d9bd231a33'}}
        >
        <MarkerF
                position={userLocation}
        />
        {businessList && businessList.map((item, index)=>index<=7&&(
          <Markers business={item} key={index}/>
        ))}
      </GoogleMap>

      </LoadScript>
    </div>
  )
}

export default GoogleMapView
