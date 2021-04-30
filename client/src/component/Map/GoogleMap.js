import React, {Component, useState} from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import {Container} from 'semantic-ui-react'

const mapStyles = {
  width: '100%',
  height: '100%',
  top:"4%",
  left:"-5%"
};

const GoogleMap =(props) =>{

  const [loc,setLoc] = useState({lat:41, lng:87});
  
  const onMarkerClick=()=>{
    return setLoc({lat: curPos.lat, lng: curPos.lng});
  }
  var curPos = {
    lat:41,
    lng:87
  }
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
     setLoc({lat: pos.lat, lng : pos.lng});
     curPos.lat = pos.lat;
     curPos.lng = pos.lng;
      
    })
    
  
  } else{

  }
  return (     
    <div  >
      <Container>
        <Map
          google={props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{
          lat: loc.lat,
          lng: loc.lng
           }}
           
        >
          <Marker onClick={onMarkerClick}
          title={'Your location'}
                name={'Current location'} />

        </Map>
        
      </Container>
      
    </div>
    
);
  
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQZ-B-bmHJnUqfUUjd_dRxO8AdNn7VSLY'
  })(GoogleMap);