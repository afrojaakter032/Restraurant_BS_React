function ReservationSection() {
    return (
        <>
            <section className="reservation-section mt-150 p-5" id="reservation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mt-5 p-3">
                            <h1>Make Reservation</h1>
                            <div className="hr mb-2"></div>
                            <p>Booking a table has never been so easy with free & instsstant online<br />
                                restaurant reservations, booking now!!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Guest Name:</label>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Date:</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className=" d-flex mb-3 gap-5">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Time:</label>
                                        <input type="time" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Pers:</label>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <button type="submit" className="btn form-btn fs-6">FIND A TABLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationSection