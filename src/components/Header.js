import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';
import SubscribeForm from '../features/user/SubscribeForm';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
    <Navbar dark color='primary' sticky='top' expand='md'>
        <NavbarBrand className='ms-5' href='/'>
            <img className='float-start' src={NucampLogo} alt='nucamp logo' />
            <h1 className='mt-1'>Buster Vance</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <Nav></Nav>
         
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-bus fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-image fa-lg' /> Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/build'>
                            <i className='fa fa-gear fa-lg' /> The Build
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Nav>
            <SubscribeForm />
        </Collapse>
    </Navbar>
    );
};

export default Header;