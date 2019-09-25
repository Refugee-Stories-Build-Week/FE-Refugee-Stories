import React,{ useState, useEffect } from "react"
import styled from 'styled-components'
import axios from 'axios';

export default function StoryPage (props){
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
const [story,setStory] = useState([])
const getStory = () => {
    axios.get(
        `https://refugee--stories.herokuapp.com/stories/all${props.match.params.id}`
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
            <Li>Name :{story.author}</Li>
            <Li>Location :{story.country}</Li>
            <Li>Time :{}</Li>
            <Li>Lorem Ipsem:{}</Li>
            
        </Ul>
        </div>
        <p>
        {story.body}
        </p>
           
        </div>
    )
}