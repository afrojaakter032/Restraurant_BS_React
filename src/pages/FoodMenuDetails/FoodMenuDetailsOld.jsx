import Layout from "../../components/Layout/Layout"

function FoodMenuDetailsOld () {
    return (
        <>
            <Layout>
                <section className="food-menu-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center mt-150">
                                    <h1 className="text-primary">OUR MENUS</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-150">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <p className="text-primary fw-bold">SMOKED BRISKET, TENDER RIBS, SMOKED SAUSAGE, BACON &</p>
                                    <p className="text-primary fw-bold">CHEDDAR WITH LETTUCE, TOMATO, HOUSE BBQ & RANCH.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="d-flex justify-content-center align-items-center gap-5">
                                <div className="col-md-4">
                                    <div>
                                        <img src="/assets/images/beef-burger.png" alt="image" height={200} width={200} />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div>
                                        <h1 className="text-white">BEEF BURGER</h1>
                                        <p>BURGER FOR THE BODY IS NOT ENOUGH THERE</p>
                                        <p>MUST BE A BURGER FOR THE SOUL</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="text-end">
                                        <p className="fw-bold fs-1 text-primary">$4.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="d-flex justify-content-center align-items-center gap-5">
                                <div className="col-md-4">
                                    <div>
                                        <img src="/assets/images/fish-burger.png" alt="image" height={200} width={200} />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div>
                                        <h1 className="text-white">FISH BURGER</h1>
                                        <p>BURGER FOR THE BODY IS NOT ENOUGH THERE</p>
                                        <p>MUST BE A BURGER FOR THE SOUL</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="text-end">
                                        <p className="fw-bold fs-1 text-primary">$6.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="d-flex justify-content-center align-items-center gap-5">
                                <div className="col-md-4">
                                    <div>
                                        <img src="/assets/images/veggie-burger.png" alt="image" height={200} width={200} />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div>
                                        <h1 className="text-white">VEGGIE BURGER</h1>
                                        <p>BURGER FOR THE BODY IS NOT ENOUGH THERE</p>
                                        <p>MUST BE A BURGER FOR THE SOUL</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="text-end">
                                        <p className="fw-bold fs-1 text-primary">$6.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ Layout>
        </>
    )
}

export default FoodMenuDetailsOld
