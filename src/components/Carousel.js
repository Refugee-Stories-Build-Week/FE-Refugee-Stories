import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { baseUrl } from './config';

// export default class SimpleSlider extends Component {
const Carousel = ({ stories }) => {
//   console.log(stories);
  console.log(stories[stories.length - 1], 'last story');
  //   render() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    adaptiveHeight: true,
    variableWidth: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="carousel-container">
      <h2 className="car-headline"> Most Recent </h2>
      <Slider {...settings}>
        <div className="car-card-container">
          <h2 className="story-title">{[stories.length - 1].title}</h2>
          <Link to={`/stories/${[stories.length - 1]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 1].url_img}
            />
          </Link>
          <Link to={`/stories/${[stories.length - 1]}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>
        {/* <div Classname="car-card-container">
          <h2 className="story-title">{stories[stories.length - 2].title} </h2>
          <Link to={`/story/${stories[stories.length - 2].id}`}>
            <img
              className="carousel-image"
              alt="author"
              src={stories[stories.length - 2].imageUrl}
            />
          </Link>
          <Link to={`/story/${stories[stories.length - 2].id}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>
        <div Classname="car-card-container">
          <h2 className="story-title">{stories[stories.length - 3].title} </h2>
          <Link to={`/story/${stories[stories.length - 3].id}`}>
            <img
              className="carousel-image"
              alt="author"
              src={stories[stories.length - 3].imageUrl}
            />
          </Link>
          <Link to={`/story/${stories[stories.length - 3].id}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>
        <div Classname="car-card-container">
          <h2 className="story-title">{stories[stories.length - 4].title} </h2>
          <Link to={`/story/${stories[stories.length - 4].id}`}>
            <img
              className="carousel-image"
              alt="author"
              src={stories[stories.length - 4].imageUrl}
            />
          </Link>
          <Link to={`/story/${stories[stories.length - 4].id}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>
        <div Classname="car-card-container">
          <h2 className="story-title">{stories[stories.length - 5].title} </h2>
          <Link to={`/story/${stories[stories.length - 5].id}`}>
            <img
              className="carousel-image"
              alt="author"
              src={stories[stories.length - 5].imageUrl}
            />
          </Link>
          <Link to={`/story/${stories[stories.length - 5].id}`}>
            <button className="carousel-button"> Read More </button>
          </Link>
        </div> */}
      </Slider>
    </div>
  );
};
export default Carousel;
