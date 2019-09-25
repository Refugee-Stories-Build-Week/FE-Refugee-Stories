import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Stories = ({ stories }) => {
    // console.log(stories);

    return (
      <div className="stories-container"> 
        <h2>All Stories</h2>
        <div className="stories-display">
        {stories.map(story => (
          <div className="list-of-stories-home" key={story.id}>
            <Link to={`/story/${story.id}`}>
              <h3 className="story-title">{story.title}</h3>
            </Link>
            <Link to={`/story/${story.id}`}>
              <img src={story.url_img} className="story-image" width="200px" alt="author" />
              <h3>{story.country}</h3>
              <p>{story.body}</p>
              <p>{story.created_at}</p>
            </Link>
          </div>
        ))}

        </div>
      </div>
    )
}

export default Stories;
