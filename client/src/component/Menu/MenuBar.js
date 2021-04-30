import React, {useState, useEffect,Redirect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'


const MenuBar = (props) =>{
    
    // const [tab, setTab] = useState(0)
    // componentDidMount()
    // useEffect(() => {
    //     console.log('trigger me once')   
    // },[])
    // // componentDidUpdate()
    // useEffect(() => {
    //     console.log('trigger me everytimewhen tab change')   
    // },[tab])

    // console.log('tab: ', tab)
    // const[active,setActive] = useState({activeItem});
    


    return(
        

        <div>
            <Menu secondary size='massive'>
                <Menu.Item as={Link} to='/main'
                name="Home"
                
                />
                <Menu.Item as={Link} to='/apartment'
                name="Apartment"
                
                />
                <Menu.Item as={Link} to='/condo'
                name="Condo"
                
                />
                <Menu.Item as={Link} to='/townhomes'
                name="Townhomes"
                
                />
                <Menu.Item as={Link} to='/house'
                name="House"
                
                />
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/addproperty'
                        name='Add a Property'
                        
                    />
                    <Menu.Item as={Link} to='/signin'
                        name='Sign In'
                        
                    />
                    <Menu.Item as={Link} to='/signup'
                        name='Join in now'
                        
                    />
                </Menu.Menu>

            </Menu>
        </div>
            
        
    
    );

    
}
export default MenuBar;