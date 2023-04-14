import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

const Slider = () => {

    return (
        <Carousel fade>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"
              alt="First slide"
            />

            <img
              className="d-block w-100"
              src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg"
              alt="First slide"
            />
    

          </Carousel.Item>
       ))
       
      </Carousel>
    )
}

export default Slider;
