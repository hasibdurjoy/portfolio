import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import ContactSideBar from '../ContactSideBar/ContactSideBar';
import Experiences from '../Experiences/Experiences';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <ContactSideBar />
            <Banner />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;