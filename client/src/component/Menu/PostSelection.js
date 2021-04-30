import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react';

const PostSelection=()=>{
    return(
        <Form>
            <Form.Field inline>
                <label> Price</label>
                <Input placeholder='Min'/>
                <label> to </label>
                <Input placeholder='Max'/>
                <Button primary>Save change</Button>
            </Form.Field>
        </Form>
    )

}

export default PostSelection;