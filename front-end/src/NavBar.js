import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const NavBar = (props) => {
    return ( 
        <Menu>
      <a className="menu-item" href="/calendars">
        Calendars
      </a>

      <a className="menu-item" href="/guests">
        Guests
      </a>

      <a className="menu-item" href="/rooms">
        Rooms
      </a>
    </Menu>
     );
}
 
export default NavBar;