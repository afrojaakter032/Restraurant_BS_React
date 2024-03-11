function SliderSection () {
    return (
        <>
        <section className="hero-section" id="hero">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/assets/images/slide3.jpg" className="d-block w-100" alt="slide1" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/slider/hero-img-2-2.jpg" className="d-block w-100" alt="slide2" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/slider/hero-img-2-3.jpg" className="d-block w-100" alt="slide3" />
                            </div>
                        </div>
                        <div className="hero-section-overlay">
                            <div className="hero-text">
                                <h1>Enjoy Our Food</h1>
                                <p>High-className professional service</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

        </>
    )
}

export default SliderSection