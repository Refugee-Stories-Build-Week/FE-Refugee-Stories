import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import StoryCard from './StoryToReview';
import styled from 'styled-components';

const Container = styled.div`
border: 2px solid #E04F56;
width: 80%;
display: flex;
margin: 10px auto 70px auto;
flex-direction: column;
`;

const CardContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 20px auto;
`;

const AnotherContainer  = styled.div`

`;

const PageTitle = styled.h2`
    color: #5A5D80;
    text-align: center;
`;

const StoriesToReview = () => {
    const [stories, setStories] = useState([]);

    const getStories = () => {
        axiosWithAuth()
        .get('https://refugee--stories.herokuapp.com/notApproved')
        .then(res => {
            console.log("story", res.data);
            const unapprovedStories = res.data.filter(story => {
            if (story.approved === 0) return story;
            });
            setStories(unapprovedStories);
        })
        .catch(err => console.log(err.res))
    };
    

    useEffect(() => {
        getStories();
    }, []);

    return( 
        <AnotherContainer>
        <div>
            <PageTitle>Stories To Review:</PageTitle>
        </div>
        <Container> 
        <CardContainer>
        { (stories.length > 0) ? (stories.map(story => (
                <StoryCard key={story.id} id={story.id} title={story.title} image={story.url_img} author={story.author} country={story.country} year={story.created_at} text={story.body}/>))) : (<p>There are no stories for review at this time.</p>)
            }
        </CardContainer>
        </Container>
        </AnotherContainer>
    )
}

export default StoriesToReview;