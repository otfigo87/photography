import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Photography</a></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/ourwork">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contactus">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
      color: white;
      text-decoration: none;
  }
  ul {
      display: flex;
      list-style: none;
  }
 #logo {
      font-family: "Lobster", cursive;
      font-size: 1.6rem;
      font-weight: lighter; 
  }
  li{
      padding-left: 10rem;
      //position: relative;
  }
`;

export default Nav;
