import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import db from './firebase';

function Post({ profilePic, image, username, timestamp, message, id, likePost, like }) {
  console.log(like)
  return (
    <div className='post'>
      <div className="post__top">
        <Avatar className='post__avatar' src={profilePic}></Avatar>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option" onClick={() => likePost(id)}>
          <ThumbUpIcon ></ThumbUpIcon>
          <p >Like</p>
          <p className='post__option__like'>{like?.length <= 1 ? (<div>{like[0]}</div>) : (<div>{like?.length}</div>)}</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon></NearMeIcon>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon></AccountCircleIcon>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </div>
      </div>
    </div>
  )
}

export default Post
