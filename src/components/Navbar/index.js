import React from 'react';
import{Nav, NavLink, NavLink2, NavIcon,  Bars} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
          <NavLink to="/">DELISH</NavLink>
          <NavLink2 to="/">KITCHEN</NavLink2>
          <NavIcon onClick={toggle}>
          <p>Menu</p> 
          <Bars />
      </NavIcon>
      </Nav>
     
    </>
  )
}

export default Navbar
