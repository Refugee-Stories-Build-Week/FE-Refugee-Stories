import React,{ useState, useEffect } from "react"
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
>>>>>>> 311d3635288c35f2499fe8e8453f9b91f222d35a
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
