import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Card,Icon,Image,Grid, Menu} from 'semantic-ui-react'
import '../Conponent.css'

 const postContainerStyle ={
    width:'100%',
    height:'100%',

    marginTop: '20px'

}

var postItems = [
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    },
    {
        header: 'title1',
        description: 'xxxxxxxx',
        meta: 'price :',
        image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        
    }

]
const Post = (props) =>{

    return(
        
        
        <Card.Group centered itemsPerRow = {3} items={postItems} className='postContainerStyle' >

        </Card.Group>
           
        
            
            
           
        
    );

}
export default Post;