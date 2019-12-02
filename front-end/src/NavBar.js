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
                <a href="/"><img src="/Hotelio_logo.png" alt="hotelio logo"/></a>
            </div>
            <Menu>
              <MenuItem className="menu-item"><a href="/bookings/new">BOOK</a></MenuItem>
              <MenuItem className="menu-item"><a href="/calendars">CALENDAR</a></MenuItem>
              <MenuItem className="menu-item" ><a href="/guests">GUESTS</a></MenuItem>
              <MenuItem className="menu-item" ><a href="/rooms">ROOMS</a></MenuItem>
            </Menu>
          </ReactOffcanvasComponent>
        </div>
      );
}
 
export default NavBar;
