import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './../../App.css';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="container flex" >

          <h1 class="logo">Gian Solid App</h1>
          <nav>
            <ul>
              {MenuItems.map((item, index) => {
                return (
                  <li><a className={item.cName} href={item.url} key={index}>
                    {item.title}
                  </a></li>
                );
              })}
            </ul>
          </nav>
          
        </div>
      </div>
    );
  }
}


export default Navbar;

