import React from 'react';
import { Link, Route } from 'react-router-dom';


const StoryCard = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.url_img}/>
            <Link to={`/story/${props.id}`}>
                <button>Review Story</button>     
            </Link>
            


        </div>
    )
}

export default StoryCard;