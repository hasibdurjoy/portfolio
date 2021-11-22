import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const CarouselShow = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Zoom>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/cvpVQQF/Screenshot-23-removebg-preview.png"
                            alt="First slide"
                            height="200px"
                        />
                    </Zoom>
                </Carousel.Item>
                <Carousel.Item>
                    <Zoom>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/VLPxj6J/mongodb-logo-vector-removebg-preview.png"
                            alt="Second slide"
                            height="200px"
                        />
                    </Zoom>
                </Carousel.Item>
                <Carousel.Item>
                    <Zoom>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/mCJ1y13/29940418-removebg-preview.png"
                            alt="Third slide"
                            height="200px"
                        />
                    </Zoom>
                </Carousel.Item>
                <Carousel.Item>
                    <Zoom>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/5xmKpVY/1-EVq-Ccm-CPgp-NKx-U1wzc-THgw-removebg-preview.png"
                            alt="Third slide"
                            height="200px"
                        />
                    </Zoom>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselShow;