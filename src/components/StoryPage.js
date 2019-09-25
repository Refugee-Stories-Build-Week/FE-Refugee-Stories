import React,{ useState } from "react"
import styled from 'styled-components'
import Axios from 'axios';

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

    Axios.get(
        'https://refugee--stories.herokuapp.com/users/'
      )
      .then(response => setStory(response))
      .catch(error => console.log(error))

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