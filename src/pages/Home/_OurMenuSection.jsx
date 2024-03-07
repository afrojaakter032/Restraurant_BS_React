function OurMenuSection() {
    return (
        <>
            <section className="our-menu-section mt-150" id="menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="text-center col-md-12 ">
                            <h1>Our Menu</h1>
                            <div className="hr mb-2"></div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
                                eros. Nullam<br />
                                malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                pede</p>
                        </div>
                    </div>
                    <div className="row mt-5 p-3">
                        <div className="col-md-12">
                            <ul className="nav nav-pills mb-3 d-flex justify-content-center align-items-center gap-2"
                                id="pills-tab" role="tablist">
                                <li className="nav-item menu-nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-lunch-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-lunch"
                                        aria-selected="true">Lunch</button>
                                </li>
                                <li className="nav-item menu-nav-item" role="presentation">
                                    <button className="nav-link" id="pills-dinner-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-dinner"
                                        aria-selected="false">Dinner</button>
                                </li>
                                <li className="nav-item menu-nav-item" role="presentation">
                                    <button className="nav-link" id="pills-desserts-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lunch" type="button" role="tab"
                                        aria-controls="pills-desserts" aria-selected="false">Desserts</button>
                                </li>
                                <li className="nav-item menu-nav-item" role="presentation">
                                    <button className="nav-link" id="pills-drinks-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lunch" type="button" role="tab" aria-controls="pills-drinks"
                                        aria-selected="false">Drinks</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-lunch" role="tabpanel"
                            aria-labelledby="pills-lunch-tab" tabIndex="0">
                            <div className="row mt-3 p-5">
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div className="position-relative">
                                            <img src="./assets/images/t1.jpg" alt="image" />
                                            <div className="menu-bedge">New</div>
                                        </div>
                                        <div className="w-100">
                                            <h4>Roasted Steak Roulade</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t2.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Fresh Baked Chicken Pot Pie</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t3.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Butterball Turkey & Dressing</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t4.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Mushroom ‘n Swiss Chicken</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t1.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Roasted Steak Roulade</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t2.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Fresh Baked Chicken Pot Pie</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t3.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Butterball Turkey & Dressing</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3 menu-item-card">
                                        <div>
                                            <img src="./assets/images/t4.jpg" alt="image" />
                                        </div>
                                        <div className="w-100">
                                            <h4>Mushroom ‘n Swiss Chicken</h4>
                                            <p>Mint parsley with apple cider vinegar, salt,<br />
                                                sugar & spices</p>
                                        </div>
                                        <div className="text-primary text-end">$20.15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-dinner-tab"
                            tabIndex="0">
                        </div>
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-dinner-tab"
                            tabIndex="0">
                        </div>
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-dinner-tab"
                            tabIndex="0">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurMenuSection