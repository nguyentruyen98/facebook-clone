import React from 'react'
import '../css/story.css'
import Avatar from '@material-ui/core/Avatar';

function Story({ img, name, avatar }) {
    return (
        <div className='story' style={{backgroundImage:`url(${img})`}}>
            <Avatar className='story__avatar' src={avatar}></Avatar>
            <h4>{name}</h4>
        </div>
    )
}

export default Story
