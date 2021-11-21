import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const CarouselShow = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://findlogovector.com/wp-content/uploads/2018/11/mongodb-logo-vector.png"
                        alt="First slide"
                        height="150px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://stringfixer.com/files/29940418.jpg"
                        alt="Second slide"
                        height="150px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/max/2000/1*EVqCcmCPgpNKxU1wzcTHgw.png"
                        alt="Third slide"
                        height="150px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://storage.googleapis.com/5paisa-prod-storage/files/2021-06/nodejs.png"
                        alt="Third slide"
                        height="150px"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselShow;