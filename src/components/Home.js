import React, { useState, useEffect } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import Stories from '../components/Stories';
import StoryForm from "./StoryForm";
import axios from 'axios';


const Home = () => {
    const [storyList, setStoryList] = useState([]);

    const getStories = () => {
        // axiosWithAuth()
        axios
        .get('https://refugee--stories.herokuapp.com/stories/')
        .then(res => {
            console.log(res.data);
            setStoryList(res.data);
        })
        .catch(err => console.log(err.res));
    };

    useEffect(() => {
        getStories();
    }, [])
    

    return(
        <div className="home-container">
        <Stories stories={storyList}/>
        {/* <Carousel /> */}
        <StoryForm />
        </div>
    )
}

export default Home;