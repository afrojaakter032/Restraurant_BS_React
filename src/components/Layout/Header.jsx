import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <header className="header">
                <section className="navbar-section">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand nav-link fs-2" href="#">Burger Bar</a>
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
                                            <li><Link className="dropdown-item" to="/food-menu-list/breakfast">Breakfast</Link></li>
                                            <li><Link className="dropdown-item" to="/food-menu-list/lunch">Lunch</Link></li>
                                            <li><Link className="dropdown-item" to="/food-menu-list/dinner">Dinner</Link></li>
                                            <li><Link className="dropdown-item" to="/food-menu-list/desserts">Desserts</Link></li>
                                            <li><Link className="dropdown-item" to="/food-menu-list/drinks">Drinks</Link></li>
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
