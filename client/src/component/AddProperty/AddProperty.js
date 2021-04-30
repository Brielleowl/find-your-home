import React from 'react'
import { Container, Form, Input } from 'semantic-ui-react'
import Title from '../mainPage/Title'


const AddProperty=()=>{
    const typeOpt=[
        {
            key:1,
            text:'Apartment',
            value: 1

        }
    ]
    return(
        <Container className=''>
            <Title title="Add Your Property " main="true"/>
            
            <Form>
                <Form.Group >
                    <Form.Select 
                        label='Property Type'
                        options={typeOpt}
                        placeholder='type'
                    />
                    <Form.Input fluid label='Address' placeholder='Address'/>
                    
                </Form.Group>
                <Form.Group>
                    
                    <Form.Select 
                        label='Bed'
                        options={typeOpt}
                        placeholder='bed'
                    />
                    <Form.Select 
                        label='Bath'
                        options={typeOpt}
                        placeholder='bed'
                    />

                </Form.Group>
            </Form>
        </Container>
         
    )
}

export default AddProperty;