import React from 'react'
import '../css/sidebar.css'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupIcon from '@material-ui/icons/Group';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow title={user.displayName} src={user.photoURL}></SidebarRow>
      <SidebarRow title='Friend' Icon={PeopleAltIcon}></SidebarRow>
      <SidebarRow title='Group' Icon={GroupIcon}></SidebarRow>
      <SidebarRow title='Marketplace' Icon={StoreIcon}></SidebarRow>
      <SidebarRow title='Video' Icon={VideoLibraryIcon}></SidebarRow>
      <SidebarRow title='See More' Icon={ArrowDropDownCircleIcon}></SidebarRow>


    </div>
  )
}

export default Sidebar
