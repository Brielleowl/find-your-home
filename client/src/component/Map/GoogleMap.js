import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Container} from 'semantic-ui-react'

const mapStyles = {
  width: '100%',
  height: '100%',
  top:"0%",
  left:"-5%"
};
const GoogleMap =(props) =>{


  
    return (     
        <div  >
          <Container>
            <Map
              google={props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
              lat: -1.2884,
              lng: 36.8233
                }}
            />
          </Container>
                
        </div>

    );
  
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQZ-B-bmHJnUqfUUjd_dRxO8AdNn7VSLY'
  })(GoogleMap);