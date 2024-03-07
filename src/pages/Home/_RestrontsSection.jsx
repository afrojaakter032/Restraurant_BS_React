function RestrontsSection() {
    return (
        <>
            <section className="restronts-section mt-150">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Our Restorans</h1>
                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper <br />
                                est, vitae luctus metus libero eu augue</p>
                            <p className="mt-3">If you have any questions, we are here to support you 24/7.<br />
                                We do our best to make your life happier and easier! See you soon!</p>
                            <div className="mt-3 d-flex gap-5">
                                <div>
                                    <div className="text-color">Monday — Thursday</div>
                                    <div>8 am — 11 pm</div>
                                </div>
                                <div>
                                    <div className="text-color">Friday — Sunday</div>
                                    <div>11 am — 11 pm</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex gap-2">
                                <div className="mt-4">
                                    <img src="./assets/images/ab3.jpg" alt="image" height="auto" width="auto" />
                                </div>
                                {/* <!-- <div>
                            <img src="./assets/images/ab4.jpg" alt="image" height="auto" width="auto">
                        </div> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RestrontsSection