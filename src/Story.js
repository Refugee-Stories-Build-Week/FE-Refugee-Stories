import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StoryPage from './components/StoryPage';
import { axiosWithAuth } from './utils/axiosWithAuth'
import axios from 'axios';

const Story = (props) => {
    const [story,setStory] = useState([])
    
        axiosWithAuth()
        .get('https://refugee--stories.herokuapp.com/stories/')
        .then(res => {
            
            setStory(res.data);
        })
        .catch(err => console.log(err.res));
    


    console.log(story)
   
    return (
    <div>
        {story.map(each => (
            <div key={each.id}>
            <Route path={`story/${each.id}`} component={() => <StoryPage key={each.id} each={each} />} />
            </div>
        ))}
        </div>
    )
}
export default Story