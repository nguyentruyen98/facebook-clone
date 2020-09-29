import React from 'react'
import '../css/sidebarrow.css'
import Avatar from '@material-ui/core/Avatar';
function SidebarRow({ src, Icon, title }) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}></Avatar>}
            {Icon && <Icon fontSize='large'></Icon>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
