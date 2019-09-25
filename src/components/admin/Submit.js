import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import axios from 'axios';
import { axiosWithAuth } from "../../utils/axiosWithAuth";


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
const [request,setRequest] = useState([]);
const id = props.match.params.id;

const rejectStory = id => {
    axiosWithAuth()
    .delete('https://refugee--stories.herokuapp.com/stories/:id')
    .then(res => {
        console.log('DELETE', res);
        props.history.push('/dashboard')
    })
    .catch(error => console.log(error.res))
}

const approveStory = id => {
    axiosWithAuth()
      .put('https://refugee--stories.herokuapp.com/stories/:id')
      .then(res => {
        console.log('APPROVE', res);
        props.history.push("/dashboard")
      })
      .catch(error => console.log(error.response))
  };


  const getStory = () => {
    axiosWithAuth()
      .get(
        'https://refugee--stories.herokuapp.com/stories/:id'
      )
      .then(res => {
        console.log('ADMIN REQUEST', res);
        setRequest(res.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStory();
  }, []);

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
        <button onClick={() => approveStory(id)}>Approve</button>
        <button onClick={() => rejectStory(id)}>Reject</button>
        </div>
    )
}
