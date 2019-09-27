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
margin-left:15rem;

<<<<<<< HEAD
  `
  const Request =styled.div`
display:inline-flex;
  `
  const P = styled.p`
  margin-top:2rem;
  width:100%;
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

const approveStory = (id, data) => {
    axiosWithAuth()
      .put(`https://refugee--stories.herokuapp.com/stories/${id}`,{approved:true})
      .then(res => {
        console.log('APPROVE', res);
        props.history.push("/dashboard")
      })
      .catch(error => console.log(error.response))
    console.log(id, data)
  };


  const getStory = () => {
    axiosWithAuth()
      .get(
        `https://refugee--stories.herokuapp.com/stories/all/${id}`
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
        <button onClick={() => approveStory(id)}>Approve</button>
        <button onClick={() => rejectStory(id)}>Reject</button>
        </div>
    )
}
