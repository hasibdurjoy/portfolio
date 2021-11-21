import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Experiences />
            <Projects />
        </div>
    );
};

export default Home;