import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from '../design/logo.png';

const Nav = styled.nav`
    display: flex;
    background: #3C3C54;
    justify-content: flex-end;
    height: 80px;
`;


const NavigationLinks = styled.div`
    display: flex;
    width: 85%;
    margin: auto 0;
    justify-content: flex-end;
`;


const StyledNavLink = styled(NavLink)`
    color: white;
    margin:  20px;
    text-decoration: none;

`;

const Image = styled.a`
    margin: auto 0;
`;

const Navigation = () => {
  return (
    
      <Nav>
          
        <Image href="/" ><img src={logo} height="65" width="140" /> </Image>
           
          <NavigationLinks>     
            <StyledNavLink to="/">Home</StyledNavLink>      
            <StyledNavLink to="/about">About</StyledNavLink>       
            <StyledNavLink to="/stories">Stories</StyledNavLink>       
            <StyledNavLink to="/submit">Submit Your Story</StyledNavLink>
            <StyledNavLink to="/login">Admin Login</StyledNavLink>    
          </NavigationLinks>

      </Nav>
    
  );
};

export default Navigation;
