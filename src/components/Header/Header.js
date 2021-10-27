import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
      <Nav>
        <NavLink to='/'>
          <h1 className={styles.primary}>Fresh valley</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/orders' activeStyle>
            Orders
          </NavLink>
          <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>
          <NavLink to='/deals' activeStyle>
            Deals
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink className={styles.login} to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
    );
};

export default Header;