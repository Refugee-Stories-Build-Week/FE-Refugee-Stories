import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin: 30px auto 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #ADA8B6;
    padding: 10px;
    color: #3C3C54;
`;

const StyledLink  = styled(Link)`
    margin: 0 auto;  
`;

const Button = styled.button`
    background: #E04F56;
    color: #FFEEDB;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 10px auto 20px auto;
    color: white; 
    border: 2px solid #5A5D80;
    border-radius: 5px;

    & :hover {
    background: #5A5D80;
    border: 2px solid #E04F56;
`;

const StoryCard = (props) => {
    return (
        <CardContainer>
            <h3>{props.title}</h3>
            <img src={props.url_img} className="story-image" />
            <StyledLink to={`/story/${props.id}`}>
                <Button>Review Story</Button>     
            </StyledLink>
            


        </CardContainer>
    )
}

export default StoryCard;