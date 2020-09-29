import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/messagesender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'

function MessageSender() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [{ user }, dispatch] = useStateValue();


  const handleSubmit = e => {
    e.preventDefault();
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl



    })
    setImageUrl('');
    setInput('');
  }
  return (
    <div className='messageSender'>
      <div className="messageSender__top">
        <Avatar src={user.photoURL}></Avatar>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" className='messageSender__input' placeholder={`What is on mind, ${user.displayName} ?`} />
          <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type='text' placeholder='Image URL'></input>
          <button onClick={handleSubmit}>Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }}></VideocamIcon>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }}></PhotoLibraryIcon>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }}></InsertEmoticonIcon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
