import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container,Grid,Input, Card,Image} from 'semantic-ui-react'
import Title from './Title'
import '../Conponent.css'

const items =[
    {
        header:'house1',
        description:'xxxxxxxxx',
        meta:'price',
       
        
    },
    {
        header:'house2',
        description:'xxxxxxxxx',
        meta:'price'
    },
    {
        header:'house3',
        description:'xxxxxxxxx',
        meta:'price'

    },
    {
        header:'house4',
        description:'xxxxxxxxx',
        meta:'price'
    },
    {
        header:'house5',
        description:'xxxxxxxxx',
        meta:'price'

    },
    {
        header:'house6',
        description:'xxxxxxxxx',
        meta:'price'
    },

]
const Main =() =>{
        return(
            <div>      
                
                <Title title="Find Your Home" main="true"/>
                <Container width={80}>
                    <Input  type='text'  icon={{ name: 'search', circular: true, link: true , color:'green'}} placeholder="Type your Address or City or Zipcode" fluid>
                    </Input>
                </Container>
                <p className='mainPadding'>

                </p>
                <Container width={50}>
                    <Card.Group items={items} itemsPerRow={2}/>
                </Container>
                

            </div>
  
        );
    
}
export default Main;