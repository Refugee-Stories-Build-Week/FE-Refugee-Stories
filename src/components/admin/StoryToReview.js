import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.url_img}/>
            <Link to={`dashboard/story/${props.id}`}>
                
            <button>Review Story</button>
            </Link>
            
        </div>
    )
}

export default StoryCard;