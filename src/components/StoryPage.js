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
   
    const Img = styled.img`
margin-left:-5rem;
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
            <div className="request-header">
        <Img src={story.url_img}></Img>
        <Ul>
            
            <Li>{story.title}</Li>
            <Li>{story.created_at}</Li>
            
            
        </Ul>
        </div>
        <p>
        {story.body}
        </p>
           
        </div>
    )
}

export default StoryPage;

