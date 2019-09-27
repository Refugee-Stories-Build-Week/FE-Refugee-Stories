import React,{ useState, useEffect } from "react"
import styled from 'styled-components'
// import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
const StoryPage = (props) => {
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
    const Request =styled.div`
    display:inline-flex;
      `
      const P = styled.p`
      margin-top:2rem;
      width:100%;
      `
   
    const Img = styled.img`
height:500px
width:700px;
margin-bottom:1rem;
    `
const [story,setStory] = useState({})
const getStory = () => {
    axiosWithAuth()
    .get(
        `https://refugee--stories.herokuapp.com/stories/all/${props.match.params.id}`
      )
      .then(response => {
        console.log(response, 'response');
        setStory(response.data)
    })
      .catch(error => console.log(error.response))
}
useEffect(() => {
    getStory();
}, [])
    return (
        <div>
        <Heading>{story.title}</Heading>      
        <Request>
        <Img src={story.url_img}></Img>
  <Ul>
      <Li>By : {story.author}</Li>
      <Li>Location : {story.country}</Li>
      <Li>Time : {story.created_at}</Li>
      <Li><P>
 {story.body}
  </P></Li>
  </Ul>
  
  </Request>
  </div>
    )
}

export default StoryPage;

