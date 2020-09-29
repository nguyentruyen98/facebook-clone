import React from 'react'
import '../css/header.css'
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { useStateValue } from './StateProvider';
function Header() {
  const [{ user },dispatch] = useStateValue();
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
        <div className="header__input">
          <SearchIcon fontSize='large'></SearchIcon>
          <input type="text" placeholder='Search Facebook' />
        </div>
      </div>
      <div className="header__mid">
        <div className="header__option header__option__active ">
          <HomeIcon fontSize='large'></HomeIcon>
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize='large'></StorefrontIcon>
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize='large'></SubscriptionsIcon>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize='large'></SupervisedUserCircleIcon>
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize='large'></SportsEsportsIcon>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar alt="ZAO" src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddCircleIcon fontSize='large'></AddCircleIcon>
        </IconButton>
        <IconButton>
          <ForumIcon fontSize='large'></ForumIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize='large'></NotificationsIcon>
        </IconButton>
        <IconButton>
          <ArrowDropDownCircleIcon fontSize='large'></ArrowDropDownCircleIcon>
        </IconButton>
      </div>
    </div>
  )
}

export default Header
