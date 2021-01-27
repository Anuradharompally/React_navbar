import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    "https://static.toiimg.com/photo/70733868/Xiaomi-Redmi-8A.jpg",
    "https://static.toiimg.com/photo/70733868/Xiaomi-Redmi-8A.jpg",
    "https://static.toiimg.com/photo/70733868/Xiaomi-Redmi-8A.jpg"
  
];


function index() {
    return (
        
        
           <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
        
        
    )
}

export default index
