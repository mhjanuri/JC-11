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
import { URL } from '../support/Url';
import { FaShoppingCart } from 'react-icons/fa'


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                                    <Link onClick={()=>onSignOutClick()} >Logout</Link>
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
    window.location.assign(`${URL}/login`)
}

const MapStateToProps=(state)=>{
    return{
        namauser:state.Auth.username
    }
}

export default connect(MapStateToProps) (Header);