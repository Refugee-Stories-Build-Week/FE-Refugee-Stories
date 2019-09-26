import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Stories from '../components/Stories';


const Home = () => {
    const [storyList, setStoryList] = useState([]);

    const getStories = () => {
        axiosWithAuth()
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

        </div>
    )
}

export default Home;