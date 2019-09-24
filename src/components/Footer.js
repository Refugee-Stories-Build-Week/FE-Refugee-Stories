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

`
const FooterStart = styled.div`
justify-content:right;
font-size:12px;

`

const Paragraph = styled.p`

margin-left:27%;
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
<Li><NavLink className="white" to="/requestStory">Request Story </NavLink></Li>
<Li><NavLink className="white" to="/story">Story</NavLink> </Li>
</Ul>
</FooterStart>
<Paragraph>
&#174; Refugees Team
</Paragraph>

</Footer>
    )
}