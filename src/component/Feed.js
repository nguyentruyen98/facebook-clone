import React, { useState, useEffect } from 'react'
import '../css/feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post';
import firebase from 'firebase'
import db from './firebase';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';
function Feed() {
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useStateValue();
  const [{ user }] = useStateValue();
  const [unlike, setUnike] = useState(true)
  console.log(state.user.displayName)
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ))
  }, [])
  const likePost = (id) => {
    var likeNumber = db.collection('posts').doc(id);
    if (unlike) {
      likeNumber.update({
        like: firebase.firestore.FieldValue.arrayUnion(user.displayName)
      })
    }
    else {
      likeNumber.update({
        like: firebase.firestore.FieldValue.arrayRemove(user.displayName)
      })
    }
    setUnike(!unlike)
  }
  return (
    <div className='feed'>
      <StoryReel></StoryReel>
      <MessageSender></MessageSender>
      {posts?.map(post => (
        <Post
          id={post.id}
          image={post.data.image}
          message={post.data.message}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          likePost={likePost}
          like={post.data.like}
        />
      ))}

    </div>
  )
}

export default Feed




