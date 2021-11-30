import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#24263b' }}>
            <div className="container">
                <div className="pb-4">
                    {/* <img style={{ width: '250px' }} src={logo} alt="" /> */}
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <i style={{ color: 'wheat', marginBottom: '15px' }} class="fas fa-globe fa-3x"></i>
                            <h5 style={{ color: 'white' }}>New Paltan, Azimpur, Dhaka</h5>
                            <p style={{ color: 'white' }}>My Address</p>
                        </div>
                        <div className="col-md-4">
                            <i style={{ color: 'wheat', marginBottom: '15px' }} class="far fa-envelope fa-3x"></i>
                            <h5 style={{ color: 'white' }}>hasibur.rahman2571@gmail.com</h5>
                            <p style={{ color: 'white' }}>My Email</p>
                        </div>
                        <div className="col-md-4">
                            <i style={{ color: 'wheat', marginBottom: '15px' }} class="fas fa-phone fa-3x"></i>
                            <h5 style={{ color: 'white' }}>+8801627712571</h5>
                            <p style={{ color: 'white' }}>Phone Number</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-between align-items-center mt-5">
                                <p className="fw-bold text-white">Home</p>
                                <p className="fw-bold text-white">Projects</p>
                                <p className="fw-bold text-white">Portfolio</p>
                                <p className="fw-bold text-white">Blog</p>
                                <p className="fw-bold text-white">Contacts</p>
                            </div>
                            <p style={{ color: 'wheat' }}>Copyright © 2021 Hasibur Rahman. All Rights Reserved.</p>
                            <div className="mb-4">
                                <i style={{ color: 'white', marginRight: '25px' }} class="fab fa-github fa-2x"></i>
                                <i style={{ color: 'white', marginRight: '25px' }} class="fab fa-linkedin-in fa-2x"></i>
                                <i style={{ color: 'white', marginRight: '25px' }} class="fab fa-whatsapp fa-2x"></i>
                                <i style={{ color: 'white', marginRight: '25px' }} class="fab fa-twitter fa-2x"></i>
                                <i style={{ color: 'white', marginRight: '25px' }} class="fab fa-instagram fa-2x"></i>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;