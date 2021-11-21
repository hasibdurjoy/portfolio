import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselShow from '../CarouselShow/CarouselShow';


const Banner = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-md-6 d-flex flex-column  justify-content-center">
                    <h1>Hello , Welcome to <br /> <span className="text-danger fs-1">Hasibur Rahman</span> world</h1>
                    <h1>MERN stack web developer</h1>
                    <CarouselShow />
                    <p>Hi This is me Hasibur Rahman . You can call me a tech enthusiast. Learning is my passion . I am also learning now. Currently I am living in Dhaka. I am a MERN stack web developer. As a MERN stack Developer I know MongoDb, Express , NodeJs and ReactJs very well. Personally I love to watch movies ans sports</p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/n6fNXhp/durjoy.png" alt="" width="450" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;