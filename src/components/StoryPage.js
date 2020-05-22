import React,{ useState, useEffect } from "react"
import styled from 'styled-components'
// import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
const StoryPage = (props) => {
    const Heading = styled.h2`
    text-align:center;
    `
    const Ul = styled.div`
     padding: 0 10px; 
    `
    const Li = styled.p`
    list-style:none;
    
    `
   
    const Img = styled.img`
width: 50%;
height: 50%;
    `

const PageContainer = styled.div`
    margin: 0 auto 70px auto;
`;

    const Container =styled.div`
    display: flex;
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
        <PageContainer>
            <Heading>{story.title}</Heading>
            <Container>      
                    <Img src={story.url_img} />
                        <Ul>
                            <Li>{story.title}</Li>
                            <Li>{story.created_at}</Li>  
                            <Li>
                                <p>{story.body}</p>   
                            </Li>
                        </Ul>
            </Container>    
        </PageContainer>
    )
}

export default StoryPage;

