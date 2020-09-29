import React from 'react'
import '../css/login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    })
      .catch(error => alert(error.message))
  }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="" />
        <img src="https://www.logomaker.com/wp-content/uploads/2018/01/facebook-logo-font-1.png" alt="" />
      </div>
      <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
