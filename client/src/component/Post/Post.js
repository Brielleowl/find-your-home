import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Card,Icon,Image} from 'semantic-ui-react'

const postStyles={
  width: '20%',
  height: '100%',
  top:"0%",
  left:"0%"
}
const Post = () =>{
    return(
        <div>
            <Card style = {postStyles}>
                <Image src = 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Image>
                <Card.Content>
                    <Card.Header> xxx Apartment</Card.Header>
                    <Card.Meta> Start from xxx</Card.Meta>
                    <Card.Description>
                        Studio
                        
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='dollar sign'/>
                    start from 1200
                </Card.Content>

            </Card>
        </div>
    );

}
export default Post;