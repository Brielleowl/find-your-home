import React, {Component} from 'react'

import {Segment,Grid,Image} from 'semantic-ui-react'
import GoogleMap from '../Map/GoogleMap'

import PostMenu from '../Post/PostMenu'
import '../Conponent.css'


const House=() => {
    
    return (   
        
           
        
        <Grid columns = {2} className='houseStyle'>
            <Grid.Column className = 'leftPostStyle'>
                <PostMenu/>
                
                
            </Grid.Column> 
                <Grid.Column className='mapStyle'>
                    
                    <GoogleMap/>
                    
                </Grid.Column>
        </Grid>   
                   
         
    
        

    );
  
}

export default House;