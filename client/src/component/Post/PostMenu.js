import React from 'react'
import { Tab} from 'semantic-ui-react'
import Post from './Post'
import PostSelection from '../Menu/PostSelection'
const PostMenu=()=>{

    const paneItems=[
        {menuItem : 'For sell',
        render: ()=> <Tab.Pane> 
            <PostSelection/>
            <Post type='sell'/>
            </Tab.Pane>
        },
        {
        menuItem : 'For rent',
        render: ()=> <Tab.Pane> 
            <PostSelection/>
            <Post type='rent'/>
            
            </Tab.Pane>
        }
    ]
    return(
        
        <Tab panes={paneItems} className='postContainerStyle'/>
    );
}

export default PostMenu;