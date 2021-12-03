import React from 'react';
import './ContactSideBar.css';

const ContactSideBar = () => {
    return (
        <div className="side-icon text-start mx-3 fs-4 text-light bg-transparent p-2 rounded" style={{ position: "fixed", marginTop: "25vh" }}>
            <a href="https://www.facebook.com/hasib.durjoy.5/" target="_blank" className="anchor">
                <i className=" bg-primary p-2 fab fa-facebook  icon"></i>
            </a><br />
            <a href="https://wa.me/+8801627712571" target="_blank" className="anchor">
                <i className=" bg-success p-2 fab fa-whatsapp  icon"></i>
            </a><br />
            <a href="https://www.linkedin.com/in/hasibur2571/" target="_blank" className="anchor">
                <i className=" bg-primary p-2 fab fa-linkedin  icon"></i>
            </a><br />
            <a href="https://github.com/hasibdurjoy" target="_blank" className="anchor">
                <i className=" bg-dark p-2 fab fa-github  icon"></i>
            </a><br />
            <a href="https://www.facebook.com/hasib.durjoy.5/" target="_blank" className="anchor">
                <i className=" bg-primary p-2 fab fa-facebook-messenger icon"></i>
            </a><br />
            <a href="https://msng.link/o/?+8801627712571=tg" target="_blank" className="anchor">
                <i className=" bg-primary p-2 fab fa-telegram  icon"></i>
            </a><br />
            <a href="https://twitter.com/Hasibur57416868" target="_blank" className="anchor">
                <i className=" bg-primary p-2 fab fa-twitter  icon"></i>
            </a><br />
        </div>
    );
};

export default ContactSideBar;