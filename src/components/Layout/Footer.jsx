import Header from "./Header"

function Footer () {
    return (
        <>
        <footer>
        <section className="get-in-touch-section" id="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>Get in Touch</h1>
                        <div className="hr mb-2"></div>
                        <p>Morbi in sem quis dui placerat ornare.</p>
                    </div>
                </div>
                <div className="row p-3 mt-2">
                    <div className="col-md-4 text-center p-2">
                        <h2>Contact Info</h2>
                        <p>732/21 Second Street, Manchester,<br />
                            King Street, Kingston United</p>
                        <span>+ 123 4567-32-21</span><br />
                        <span>+ 123 9876-54-43</span>
                        <p>info@mail.com</p>
                        <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
                            <a href="#" className="btn-social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="btn-social-icon"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="btn-social-icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="btn-social-icon"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-2">
                        <h2>Open Hours</h2>
                        <div className="text-color">Monday — Thursday</div>
                        <div>8 am — 11 pm</div>
                        <div className="text-color">Friday — Sunday</div>
                        <div>11 am — 11 pm</div>
                        <p>Note: Restaurant is closed on holidays.</p>
                    </div>
                    <div className="col-md-4 text-center p-2">
                        <h2>Say Hello!</h2>
                        <div>
                            <label htmlFor="exampleInputName" className="form-label"></label>
                            <input type="text" className="form-control" placeholder="Name*" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputEmail1" className="form-label" aria-placeholder="Email*"></label>
                            <input type="email" className="form-control" placeholder="Email*" />
                        </div>
                        <div>
                            <label htmlFor="floatingTextarea"></label>
                            <textarea className="form-control" placeholder="*Message*"></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                        <button type="submit" className="btn send-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </section>
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6658000920997!2d90.4081568674456!3d23.795004848386917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7adebbab3b7%3A0x1a4648e7d9414ad8!2sPearl%20Hotel!5e0!3m2!1sen!2sbd!4v1709559441769!5m2!1sen!2sbd"
                width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <section className="footer-bottom-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-3 text-center">
                        <p>Copyright &copy; 2024 <a href="">Plato</a>.All rights reseve by <a href="">Nunforest</a></p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
        
        </>
    )
}
export default Footer;