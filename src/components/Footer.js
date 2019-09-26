import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


export default function Footer(){
const Footer = styled.footer`
background-color:#3C3C54;
width:100%;
bottom: 0;
font-family: 'Raleway', sans-serif;
display:inline-flex;
position: relative

`
const FooterStart = styled.div`
justify-content:right;
font-size:12px;
position: absolute;
    left: 0;
    bottom: 0;
    right:0;

`

const Paragraph = styled.p`

margin-left:80%;
color:#FFEEDB;
`
const Ul = styled.ul`
display:inline-flex;
`
const Li =styled.li`
list-style:none;
margin-left:1rem;

`

    return(
<Footer>
    <FooterStart>
        <Ul>
<Li><NavLink className="white" to="/">Home</NavLink></Li>
<Li><NavLink className="white" to="/about">About</NavLink> </Li>
<Li><NavLink className="white" to="/stories">Stories</NavLink></Li>
<Li><NavLink className="white" to="/submit">Submit Your Story</NavLink> </Li>
<Li><NavLink className="white" to="/login">Admin Login</NavLink> </Li>

</Ul>
</FooterStart>
<Paragraph>
&#174; Refugees Team
</Paragraph>

</Footer>
    )
}