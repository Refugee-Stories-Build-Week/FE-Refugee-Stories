import React, { useState, useEffect } from 'react';
import Stories from './Stories';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const StoriesGrid = () => {
    const [storiesList, setStoriesList] = useState([]);
  
    const getStories = () => {
        axiosWithAuth()
        // axios
        .get('https://refugee--stories.herokuapp.com/stories/')
        .then(res => {
            console.log(res.data);
            setStoriesList(res.data);
        })
        .catch(err => console.log(err.res));
    };
  
    useEffect(() => {
        getStories();
    }, [])
    
  
    return(
        <div className="container">
        <Stories key={storiesList.id} stories={storiesList}/>
        </div>
    )
  }
  
  export default StoriesGrid;
  