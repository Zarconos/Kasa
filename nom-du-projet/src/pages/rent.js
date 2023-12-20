import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import data from '../data/house.json';
import Header from '../components/header';
import Footer from '../components/footer';
import active from '../assets/icons/star-active 3.png'
import inactive from '../assets/icons/star-inactive 1.png'
import leftArrow from '../assets/icons/arrow_left.png'
import rightArrow from '../assets/icons/arrow_right.png'
import Error from './error';
import Toggle from '../components/toggle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/style.css';

const Rent = () => {
  const { id } = useParams();
  const selectedCard = data.find((card) => card.id === id);

  if (!selectedCard) {
    // Redirect to the Error component if the card is not found
    return <Error />;
  }

  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? active : inactive}
          alt={`Star ${i}`}
        />
      );
    }
  
    return stars;
  };

  // Configuration pour react-slick
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <img src={leftArrow} alt="Left Arrow" />,
    nextArrow: <img src={rightArrow} alt="Right Arrow" />,

  };

  return (
    <div>

        {<Header />}
<main id="rent_main">
        <Slider {...sliderSettings}>
          {selectedCard.pictures.map((picture, index) => (
            <div id="Slider" key={index}>
              <img src={picture} alt={`Slide ${index}`} />
              <p>{`${index + 1}/${selectedCard.pictures.length}`}</p>
            </div>
          ))}
        </Slider>

        <div id="whole" >
          <div id="first">
              <div id="rent">
                <h2>{selectedCard.title}</h2>
                <p>{selectedCard.location}</p>
              </div> 
              <div id="tags">
                <ul>
                  {selectedCard.tags.map((tag, index) => (
                  <li key={index}>{tag}</li> ))}
                </ul>
              </div>
          </div>

          <div id="second">
              <div id="profile">
                <p>{selectedCard.host.name}</p>
                <img src={selectedCard.host.picture} alt={selectedCard.host.name} />       
              </div>
              <div id="stars">
                {renderStars(parseInt(selectedCard.rating, 10))}
              </div>
          </div>
        </div>

        <div id="details">
          <Toggle title="Description">
            <p>{selectedCard.description}</p>
          </Toggle>
          <Toggle title="Equipment">
            <ul>
              {selectedCard.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Toggle>
        </div>
        </main>
      {<Footer />}

    </div>
  );
};

export default Rent;
