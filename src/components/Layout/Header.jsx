import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
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
                                <img src="./assets/images/slide3.jpg" className="d-block w-100" alt="slide1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/images/slider/hero-img-2-2.jpg" className="d-block w-100" alt="slide2" />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/images/slider/hero-img-2-3.jpg" className="d-block w-100" alt="slide3" />
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
                <section className="navbar-section">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand nav-link fs-2" href="#">PLATO</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fs-2 mt-3"><i className="fa-solid fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#todays-special">TODAY'S SPECIAL</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#menu" data-bs-toggle="dropdown">MENU</a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/foodmenulist">Lunch</Link></li>
                                            <li><a className="dropdown-item" href="#">Dinner</a></li>
                                            <li><a className="dropdown-item" href="#">Desserts</a></li>
                                            <li><a className="dropdown-item" href="#">Drinks</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#reservation">RESERVATION</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#gallery">GALLERY</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">CONTACT</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link">BLOG</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                            className="fa-solid fa-magnifying-glass"></i></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </section>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="form d-flex justify-content-center align-items-center">
                                <input type="text" className="form-control form-input" placeholder="Search" />
                                <span className="left-pan"><i className="fa-solid fa-magnifying-glass"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
