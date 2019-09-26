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
    const Img = styled.img`
margin-left:-5rem;

    `
const [story,setStory] = useState({});
const id = props.match.params.id;

const rejectStory = id => {
    axiosWithAuth()
    .delete(`https://refugee--stories.herokuapp.com/stories/${id}`)
    .then(res => {
        console.log('DELETE', res);
        props.history.push('/dashboard')
    })
    .catch(error => console.log(error.res))
}

const approveStory = id => {
    axiosWithAuth()
      .put(`https://refugee--stories.herokuapp.com/stories/${id}`)
      .then(res => {
        console.log('APPROVE', res);
        props.history.push("/dashboard")
      })
      .catch(error => console.log(error.response))
  };


  const getStory = () => {
    axiosWithAuth()
      .get(
        `https://refugee--stories.herokuapp.com/stories/${id}`
      )
      .then(res => {
        console.log('ADMIN REQUEST', res);
        setStory(res.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStory();
  }, []);

  return (
        <div>
              
        <Heading>{story.title}</Heading>
            <div className="request-header">
        <Img src={story.url_image}></Img>
        <Ul>
            <Li>By :{story.author}</Li>
            <Li>Location : {story.country}</Li>    
        </Ul>
        </div>
        <p>
            {story.body}
        </p>
        <button onClick={() => approveStory(id)}>Approve</button>
        <button onClick={() => rejectStory(id)}>Reject</button>
        </div>
    )
}
