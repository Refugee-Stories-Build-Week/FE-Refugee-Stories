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
        <div Classname="car-card-container">
          <h2 className="story-title">{[stories.length - 1].title} </h2>
          <Link to={`/dashboard/story/${[stories.length - 1]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 1].url_img}
            />
          </Link>
          <Link to={`/dashboard/story/${[stories.length - 1]}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div> 
        
        <div Classname="car-card-container">
          <h2 className="story-title">{[stories.length - 2].title} </h2>
          <Link to={`/dashboard/story/${[stories.length - 2]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 2].url_img}
            />
          </Link>
          <Link to={`/dashboard/story/${[stories.length - 2]}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>
        
        <div Classname="car-card-container">
          <h2 className="story-title">{[stories.length - 3].title} </h2>
          <Link to={`/dashboard/story/${[stories.length - 3]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 3].url_img}
            />
          </Link>
          <Link to={`/dashboard/story/${stories[stories.length - 3]}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>


        <div Classname="car-card-container">
          <h2 className="story-title">{[stories.length - 4].title} </h2>
          <Link to={`/dashboard/story/${[stories.length - 4]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 4].url_img}
            />
          </Link>
          <Link to={`/dashboard/story/${[stories.length - 4]}`}>
            <button className="submit-button"> Read More </button>
          </Link>
        </div>


        <div Classname="car-card-container">
          <h2 className="story-title">{[stories.length - 5].title} </h2>
          <Link to={`/dashboard/story/${[stories.length - 5]}`}>
            <img
              className="carousel-image"
              alt="author"
              src={[stories.length - 5].url_img}
            />
          </Link>
          <Link to={`/dashboard/story/${[stories.length - 5]}`}>
            <button className="carousel-button"> Read More </button>
          </Link>
        </div>


      </Slider>
    </div>
  );
};
export default Carousel;
