import React, {Component} from 'react'

import {Segment,Grid,Image} from 'semantic-ui-react'
import GoogleMap from '../Map/GoogleMap'
import Post from '../Post/Post'

const mapStyle = {
    height: '880px',
    width:'1200px'
  }
  const postStyle = {
    height: '900px',
    width: '700px'
  }
  const style={
      height:'900px'
  }
const House=() => {
    
    return (   
        
           
        <Segment>
                <Grid style={style}>
                    <Grid.Column style={postStyle}>
                        <p>
                            <Post/>
                        </p>
                    </Grid.Column> 
                    <Grid.Column style={mapStyle}>
                        <p>
                            <GoogleMap/>
                        </p>
                    </Grid.Column>
                </Grid>   
                   
         </Segment> 
    
        

    );
  
}

export default House;