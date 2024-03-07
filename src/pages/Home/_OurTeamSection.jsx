function OurTeamSection() {
    return (
        <>
            <section className="our-team-section mt-150">
                <div className="container-fluid">
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
                                    <div className="swiper-slide">
                                        <img src="./assets/images/mem1.jpg" alt="image" />
                                        <div className="text-center mt-3">
                                            <h4>JAMES EVANS</h4>
                                            <div>Cook</div>
                                            <div className="hr mb-2"></div>
                                            <p>Praesent dapibus, neque id<br /> cursus faucibus,</p>
                                        </div>
                                        <div className="text-center gap-2">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/mem2.jpg" alt="image" />
                                        <div className="text-center mt-3">
                                            <h4>KATE HAWOSTON</h4>
                                            <div>Chef</div>
                                            <div className="hr mb-2"></div>
                                            <p>Praesent dapibus, neque id<br /> cursus faucibus,</p>
                                        </div>
                                        <div className="text-center gap-2">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/mem3.jpg" alt="image" />
                                        <div className="text-center mt-3">
                                            <h4>MICHEAL BROWN</h4>
                                            <div>Chef</div>
                                            <div className="hr mb-2"></div>
                                            <p>Praesent dapibus, neque id<br /> cursus faucibus,</p>
                                        </div>
                                        <div className="text-center gap-2">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/images/mem1.jpg" alt="image" />
                                        <div className="text-center mt-3">
                                            <h4>JAMES EVANS</h4>
                                            <div>Creative Director</div>
                                            <div className="hr mb-2"></div>
                                            <p>Praesent dapibus, neque id<br /> cursus faucibus,</p>
                                        </div>
                                        <div className="text-center gap-2">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                                {/* <!-- <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurTeamSection