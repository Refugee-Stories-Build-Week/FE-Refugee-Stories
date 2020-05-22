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
width: 50%;
height: 50%;


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
            <Img src={story.url_img}></Img>
            <Ul>
              <Li>{story.title}</Li>
              <Li>Time : {story.created_at}</Li>
              <Li>
                <P>{story.body}</P>
              </Li>
            <button onClick={() => approveStory(id)}>Approve</button>
            <button onClick={() => rejectStory(id)}>Reject</button>
            </Ul>
          </Request>
        </div>
    )
}
