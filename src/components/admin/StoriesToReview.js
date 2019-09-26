import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import StoryCard from './StoryToReview';

const StoriesToReview = () => {
    const [stories, setStories] = useState([]);

    const getStories = () => {
        axiosWithAuth()
        .get('https://refugee--stories.herokuapp.com/stories/all')
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
        <div className="container"> 
        <h2>Stories To Review:</h2>
        <div>
        { (stories.length > 0) ? (stories.map(story => (
                <StoryCard key={story.id} id={story.id} title={story.title} image={story.url_img} author={story.author} country={story.country} year={story.created_at} text={story.body}/>))) : (<p>There are no stories for review at this time.</p>)
            }
        </div>
        </div>
    )
}

export default StoriesToReview;