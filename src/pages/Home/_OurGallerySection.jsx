function OurGallerySection() {
    return (
        <>
            <section className="our-gallery-section mt-150" id="gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <h1>Our Gallery</h1>
                            <div className="hr mb-2"></div>
                            <p>Morbi in sem quis dui placerat ornare.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center gallery-nav-bar mt-3">
                            <a className="p-2 active" aria-current="page" href="#">ALL</a>
                            <a className="p-2 " aria-current="page" href="#">DESSERTS</a>
                            <a className="p-2 " aria-current="page" href="#">RESTAURANT</a>
                            <a className="p-2 " aria-current="page" href="#">DINNER</a>
                        </div>
                    </div>
                    <div className="row mt-4 g-0">
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g1.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dessert, Restaurant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g2.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g3.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Restaurant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g4.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Restaurant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g5.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g6.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g7.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dinner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="gallery-item">
                                <img src="./assets/images/g8.jpg" alt="image" />
                                <div className="gallery-overlay">
                                    <div>
                                        <h5>ALIQUAM TINCIDUNT</h5>
                                        <p className="fst-italic">Dessert</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurGallerySection
