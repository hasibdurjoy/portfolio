import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="pb-4">
                    <span className="text-danger fs-1 name" style={{ fontWeight: 900, letterSpacing: 1 }}>Hasibur Rahman</span>
                    {/* <img style={{ width: '250px' }} src={logo} alt="" /> */}
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <i style={{ color: 'black', marginBottom: '15px' }} class="fas fa-globe fa-3x"></i>
                            <h5 style={{ color: 'black' }}>New Paltan, Azimpur, Dhaka</h5>
                            <p style={{ color: 'black' }}>My Address</p>
                        </div>
                        <div className="col-md-4">
                            <i style={{ color: 'black', marginBottom: '15px' }} class="far fa-envelope fa-3x"></i>
                            <h5 style={{ color: 'black' }}>hasibur.rahman2571@gmail.com</h5>
                            <p style={{ color: 'black' }}>My Email</p>
                        </div>
                        <div className="col-md-4">
                            <i style={{ color: 'black', marginBottom: '15px' }} class="fas fa-phone fa-3x"></i>
                            <h5 style={{ color: 'black' }}>+8801627712571</h5>
                            <p style={{ color: 'black' }}>Phone Number</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            <div className="mb-4">
                                <i style={{ color: 'black', marginRight: '25px' }} class="fab fa-github fa-2x"></i>
                                <i style={{ color: 'black', marginRight: '25px' }} class="fab fa-linkedin-in fa-2x"></i>
                                <i style={{ color: 'black', marginRight: '25px' }} class="fab fa-whatsapp fa-2x"></i>
                                <i style={{ color: 'black', marginRight: '25px' }} class="fab fa-twitter fa-2x"></i>
                                <i style={{ color: 'black', marginRight: '25px' }} class="fab fa-instagram fa-2x"></i>
                            </div>
                            <p style={{ color: 'black' }}>Copyright © 2021 Hasibur Rahman. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;