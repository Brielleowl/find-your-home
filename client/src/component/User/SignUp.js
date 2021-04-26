import React, {Component} from 'react'
import {Form,Checkbox, Button} from 'semantic-ui-react'


const formStyle ={
    width:'50%',
    top:'20%',
    margin:'auto',
    paddingTop:'50px'
}

const SignUp=() =>{
    
    return(
        <div>
            <h1>Find Your Home</h1>
            <Form style={formStyle}>
            <Form.Field required>
                <label> First Name</label>
                <input placeholder='First Name' />
            </Form.Field >
            <Form.Field required>
                <label> Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field required>
                <label> E-mail</label>
                <input placeholder='E-mail' />
            </Form.Field>
            <Form.Field required>
                <label> Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </Form>  
        </div>
            
        
              
    )
}
export default SignUp;