import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Logo from '../support/img/Logo.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { countCart } from './../redux/actions'
import { URL } from '../support/Url';
import { FaShoppingCart } from 'react-icons/fa'
// import { APIURL } from '../support/ApiUrl';
// import Axios from 'axios';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    console.log(props.Cart)

    // Axios.get(`${APIURL}/orders`)
    //     .then((res) => {
    //         props.countCart(res.data.length)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={Logo} alt="" style={{ height: '30px' }}/>
                    {/* BIOSKOP */}
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {props.Auth.role!=="admin"?
                            null
                            :
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/manageadmin/"}>Manage Movie</Link>
                            {/* <Button href="/manageadmin/" variant="outlined" color="primary">
                                Manage Movie
                            </Button> */}
                        </NavItem>
                        }
                        {props.Auth.role!=="admin"?
                            null
                            :
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/managestudio/"}>Manage Studio</Link>
                            {/* <Button href="/managstudio/" variant="outlined" color="secondary">
                                Manage Studio
                            </Button> */}
                        </NavItem>
                        }
                        {props.Auth.role === 'user' ?
                            <NavItem className='mr-2 pt-2'>
                                <Link to={"/history"}> History </Link>
                            </NavItem>
                            :
                            null
                        }
                        {props.Auth.role === 'user' ?
                            <NavItem className='mr-2 pt-2'>
                                <Link to={"/cart"}> <FaShoppingCart/> </Link>
                                {props.Cart}
                            </NavItem>
                            :
                            null
                        }
                        {/* {props.Cart===0 || props.AuthLog===false?
                            null
                            :
                            <NavItem className='mr-2 pt-2'>
                                {props.Cart}
                            </NavItem>
                        } */}
                        {props.namauser===''?
                            <NavItem className='mr-2 '>
                                {/* <Link to="/login">Login</Link> */}
                                <Button href="/login" variant="contained" color="secondary">
                                    Login
                                </Button>
                            </NavItem>
                            :
                            null
                        }
                        {props.namauser === '' ?
                            <NavItem className='mr-2 '>
                                {/* <Link to="/register">Register</Link> */}
                                <Button href="/register" variant="contained">Register</Button>
                            </NavItem>
                            :
                            null
                        }

                        {props.AuthLog === false?
                            null
                            :
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Halo, {props.namauser}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem >
                                        <Link to='/settings' >User Settings</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem  onClick={()=>onSignOutClick()}>
                                        <Link to='/login' onClick={()=>onSignOutClick()} >Logout</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

const onSignOutClick=()=>{
    localStorage.clear()
    window.location.reload()
    window.location.assign(`${URL}/`)
}
const mapStateToProps=(state)=>{
    return{
        namauser:state.Auth.username,
        Cart:state.Auth.cart,
        AuthLog:state.Auth.login,
        Auth:state.Auth
    }
}

export default connect(mapStateToProps,{countCart}) (Header);