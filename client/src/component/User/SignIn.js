import React from 'react'
import {Button, Container,Form, Label}from 'semantic-ui-react'


const signStyle={
    width:'50%',
    top:'20%',
    margin:'auto',
    paddingTop:'50px'
}
const SignIn=()=>{
    return(
        <div>
            <h1> Find Your Home</h1>
            <Form style={signStyle}>
                <Form.Field>
                    <label>E-mail:</label>
                    <input></input>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input></input>
                </Form.Field>
                <Button content='Sign In'></Button>

            </Form>
        </div>
        
    )

}
export default SignIn;