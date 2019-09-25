import React, { useState } from "react"
import styled from 'styled-components'
import Axios from 'axios';


export default function RequestStory(props){
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
margin-left:27rem;
    `
    const Decline = styled.button`
padding:1.3rem;

    `
    const Img = styled.img`
margin-left:-5rem;

    `
const [request,setRequest] = useState([])

    Axios.get(
        'https://refugee--stories.herokuapp.com/users/'
      )
      .then(response => setRequest(response))
      .catch(error => console.log(error))



    
    return (
        <div>
              
            <Heading>{request.title}</Heading>
            <div className="request-header">
        <Img src={request.url_image}></Img>
        <Ul>
            <Li>By :{request.author}</Li>
            <Li>Location : {request.country}</Li>    
        </Ul>
        </div>
        <p>
            {request.body}
        </p>
            <Accept>Approved</Accept>
            <Decline>Decline</Decline>
        </div>
    )
}
