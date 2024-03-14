import React from 'react';

function OurTeamSection() {
    const teamMembers = [
        {
            name: 'James Evans',
            role: 'Cook',
            image: './assets/images/mem1.jpg',
            description: 'Praesent dapibus, neque id cursus faucibus,'
        },
        {
            name: 'Kate Hawoston',
            role: 'Chef',
            image: './assets/images/mem2.jpg',
            description: 'Praesent dapibus, neque id cursus faucibus,'
        },
        {
            name: 'Micheal Brown',
            role: 'Chef',
            image: './assets/images/mem3.jpg',
            description: 'Praesent dapibus, neque id cursus faucibus,'
        },
        {
            name: 'James Evans',
            role: 'Creative Director',
            image: './assets/images/mem1.jpg',
            description: 'Praesent dapibus, neque id cursus faucibus,'
        }
    ];

    return (
        <section className="our-team-section mt-150">
            <div className="container">
                <div className="row">
                    <div className="text-center col-md-12 pt-4">
                        <h1>Meet Our Team</h1>
                        <div className="hr mb-2"></div>
                        <p>Sed arcu. Cras consequat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {teamMembers.map((member, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <img src={member.image} alt="image" />
                                        </div>
                                        <div className="text-center mt-3">
                                            <h4>{member.name}</h4>
                                            <div>{member.role}</div>
                                            <div className="hr mb-2"></div>
                                            <p>{member.description}</p>
                                        </div>
                                        <div className="text-center d-flex justify-content-center align-items-center fs-5 gap-2">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                            {/* <!-- <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeamSection;
