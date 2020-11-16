import React from 'react';
import { Carousel } from 'element-react';

function CarouselApp() {
  return (
    <div>
      <Carousel height="150px" autoplay={false}>
        {
          [1,2,3,4].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  );
}

export default CarouselApp;