import React from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Widgets from './component/Widgets';
import Login from './component/Login';
import { useStateValue } from './component/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (<Login />) : (<><Header></Header>
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Widgets></Widgets>
        </div></>)}

    </div>
  );
}

export default App;
