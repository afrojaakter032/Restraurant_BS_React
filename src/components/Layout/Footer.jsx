import Header from "./Header"

function Footer() {
    return (
        <>
            <footer>
                <section className="footer-bottom-section">
                    <div className="container-fluid">
                        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                            <div className="col-md-4">
                                <div className="my-2">
                                    <ul className="nav d-flex gap-2 fs-6">
                                        <li>
                                            <a href="#" className="text-muted text-decoration-underline">Privacy and Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted text-decoration-underline">Terms and Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-muted text-decoration-underline">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="mb-3 mb-md-0 text-muted">© 2024 <a href="#">Burger Bar</a>. All rights reserved. </span>
                                </div>
                            </div>
                            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="text-muted fs-4" href="#">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="text-muted fs-4" href="#">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="text-muted fs-4" href="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer;