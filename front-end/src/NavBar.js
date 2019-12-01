import React, { useState } from "react";
import ReactOffcanvasComponent from "react-offcanvas-component";
import { FaTimes } from "react-icons/fa";
import './App.css';

const { Menu, DropdownMenu } = ReactOffcanvasComponent;

const MenuItem = Menu.Item;

const NavBar = () => {
    return (
        <div>
          <ReactOffcanvasComponent
            className="wrapper"
            open={true}
          >
            <div className="logo">
            Hotelio
            </div>
            <Menu>
              <MenuItem className="menu-item"><a href="/calendars">Calendars</a></MenuItem>
              <MenuItem className="menu-item" ><a href="/guests">Guests</a></MenuItem>
              <MenuItem className="menu-item" ><a href="/rooms">Rooms</a></MenuItem>
            </Menu>
          </ReactOffcanvasComponent>
        </div>
      );
}
 
export default NavBar;
