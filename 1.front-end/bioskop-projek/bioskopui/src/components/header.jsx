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
                        <NavItem className='mr-2'>
                            <Link to="/manageadmin/">Manage</Link>
                        </NavItem>
                        {props.namauser===''?
                            <NavItem>
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
                                    <Link to="/logout">Logout</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

const MapStateToProps=(state)=>{
    return{
        namauser:state.Auth.username
    }
}

export default connect(MapStateToProps) (Header);