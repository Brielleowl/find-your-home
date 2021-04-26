import React, {Component} from 'react'

import {Segment,Grid,Image,Column} from 'semantic-ui-react'
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
const Apartment=() => {
    
    return (   
        
           
        
                <Grid columns={2} >
                    <Grid.Column width={8} className={style}>
                        
                            <Post/>
                        
                    </Grid.Column> 
                    <Grid.Column width={8} style={style}>
                        
                        <GoogleMap/>

                    </Grid.Column>
                </Grid>   
                   
         
    
        

    );
  
}

export default Apartment;