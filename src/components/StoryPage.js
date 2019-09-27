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
margin-left:15rem;

    `
    const Request =styled.div`
display:inline-flex;
    `
    const P = styled.p`
    margin-top:2rem;
    width:100%;
    



    `
// const [story,setStory] = useState({})
// const getStory = () => {
//     axiosWithAuth()
//     .get(
//         `https://refugee--stories.herokuapp.com/stories/all/${props.match.params.id}`
//       )
//       .then(response => {
//         console.log(response, 'response');
//         setStory(response.data)
//     })
//       .catch(error => console.log(error.response))
// }
// useEffect(() => {
//     getStory();
// }, [])
    return (
            <div>  
        <Heading>{`Keshawn Sharper`}</Heading>
            <Request>
        
        <Img src={story.url_img}></Img>
        <Ul>
            
            <Li>{story.title}</Li>
            <Li>{story.created_at}</Li>
            <Li><p>
        {story.body}
        </p></Li>
            
        </Ul>
        
        </Request>

           
         </div>
    )
}
export default StoryPage
