import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './../../App.css';
import './Navbar.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Navbar extends Component {
  render() {
    return(
        <div className="navbar">
          <div className="container flex" >

            <h1 class="logo">My Solid App</h1>
            <nav>
              <ul>
                {MenuItems.map((item, index) => {
                  return (
                    <li>
                      
                      <Link to={item.url}>{item.title}</Link>
                    </li>
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

