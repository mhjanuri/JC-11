import React, { Component } from 'react';
import logo from "../img/logo.png"
import {Link} from 'react-router-dom'
import {FaCaretDown,FaPlay} from 'react-icons/fa'

class Header extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="navigation">
                <Link to='/'>
                    <div className="nav-logo">
                        <img src={logo} alt="jancokk" />
                    </div>
                </Link>
                <div className="nav-menu">
                    <ul className="nav-left">
                        <li className="menu">
                            <Link to={'/about'} className="menu" >
                                About &nbsp; <FaCaretDown/>
                            </Link>
                        </li>
                        <li className="menu">Solution &nbsp; <FaCaretDown/></li>
                        <li className="menu">Developer &nbsp; <FaCaretDown/></li>
                        <li className="menu">Product &nbsp; <FaCaretDown/></li>
                        <li className="menu">Resources &nbsp; <FaCaretDown/></li>
                        <li className="menu">Pricing &nbsp; <FaCaretDown/></li>
                    </ul>
                </div>
                <div className="bars-mobile">
                    <i className="fas fa-bars" />
                </div>
                <div className="nav-sign">
                    <ul className="nav-right">
                        <li className="menu">Sign In</li>
                        <li className=" menu1 get-started">Get Started &nbsp;<FaPlay/></li>
                    </ul>
                </div>
            </div>
    
        );
    }
}
 
export default Header;