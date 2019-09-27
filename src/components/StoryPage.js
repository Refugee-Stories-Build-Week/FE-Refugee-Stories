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
        <Img src={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}></Img>
        <Ul>
            <Li>Name : {`Keshawn Sharper`}</Li>
            <Li>Location : {`Philadelphia`}</Li>
            <Li>Time : {`9:00pm`}</Li>
            <Li><P>
       {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}
        </P></Li>
        </Ul>
        
        </Request>
        
           
         </div>
    )
}
export default StoryPage
