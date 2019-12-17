import React, { useState } from 'react';
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
                <NavbarBrand href="/">BIOSKOP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/manageadmin/"}>Manage</Link>
                        </NavItem>
                        <NavItem className='mr-2 pt-2'>
                            <Link to={"/cart"}> <FaShoppingCart/> </Link>
                        </NavItem>
                        {props.Cart===0 || props.AuthLog===false?
                            null
                            :
                            <NavItem className='mr-2 pt-2'>
                                {props.Cart}
                            </NavItem>
                        }
                        {props.namauser===''?
                            <NavItem className='mr-2 pt-2'>
                                <Link to="/login">Login</Link>
                            </NavItem>
                            :
                            null
                        }

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {props.namauser}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to='/login' onClick={()=>onSignOutClick()} >Logout</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
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
        AuthLog:state.Auth.login
    }
}

export default connect(mapStateToProps,{countCart}) (Header);