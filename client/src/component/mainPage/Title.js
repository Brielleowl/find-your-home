import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const hStyle = {
    fontSize: 70,
}

const Title=(props) => {

    return(
        
        <div>
            <h1 style={hStyle}>{props.title}</h1>
        </div>
    )
}
export default Title;
