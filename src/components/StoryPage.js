import React,{ useState,useEffect } from "react"
import styled from 'styled-components'
import axios from 'axios';

const StoryPage = ({props}) => {
    const Heading = styled.h2`
    text-align:center;
    margin-bottom:3rem;
    `
    const Ul = styled.ul`
     
      margin-bottom:10rem;
    `
    const Li = styled.li`
    list-style:none;
    
    `
    const Accept = styled.button`
padding:1.3rem;
margin-left:25rem;
    `
    const Decline = styled.button`
padding:1.3rem;

    `
    const Img = styled.img`
margin-left:-5rem;

    `


  
console.log(props)

    return (
        <div>
              
            <Heading>{props}</Heading>
            <div className="request-header">
        <Img src={props}></Img>
        <Ul>
            <Li>Name :{props}</Li>
            <Li>Location :{props}</Li>
            <Li>Time :{}</Li>
            <Li>Lorem Ipsem:{}</Li>
            
        </Ul>
        </div>
        <p>
        {props}
        </p>
           
        </div>
    )
}
export default StoryPage
