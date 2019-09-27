
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StoriesContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
`;

const StoriesDisplay = styled.div`
border: 2px solid #E04F56;

width: 80%;
display: flex;
margin: 10px auto 70px auto;
flex-wrap: wrap;
`;

const StoryList = styled.div`
border: 2px solid #ADA8B6;
background: white;
width: 30%;
flex-wrap: wrap;
margin: 18px auto 10px auto;
box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3C3C54;

`;

const PageTitle = styled.h1`
  text-align: center;
  color: #3C3C54;
`;

const StoryTitle = styled.h3`
  margin-left: 5px;
`;

const Stories = ({stories}) => {
    // console.log(stories);
    return (
      
      <StoriesContainer>
        <>
       <PageTitle className="h1">All Refugee Stories</PageTitle>
      </>
      <StoriesDisplay>
        {stories.map(story => (
          <StoryList key={story.id}>

            <StyledLink to={`dashboard/story/${story.id}`}> 

              <StyledLink to={`dashboard/story/${story.id}`}>
                <Image src={story.url_img} className="story-image" alt="author" />
              </StyledLink>
              
              <StoryTitle>{story.title}</StoryTitle>
              
            </StyledLink> 

          </StoryList>
        ))}
      </StoriesDisplay>
    </StoriesContainer>
  );
 }

export default Stories;