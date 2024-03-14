import Layout from "../../components/Layout/Layout"
import NoticeCard from "../../components/NoticeCard";

function NoticeDetails() {
    const notices = [
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
        
    ];
    return (
        <>
            <Layout>
                <section className="notice-details-section mt-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <img src="./assets/images/1.jpg" alt="image" />
                                </div>
                                <div className="mt-5 p-5">
                                    <h1>Aliquam tincidunt mauris.</h1>
                                    <p className="fs-5">Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula. Cras vitae diam ut justo elementum faucibus eget a diam. Etiam sodales a sem vitae fermentum</p><br />
                                    <p className="fs-5">Curabitur pellentesque massa eu nulla et consequat porttitor arcu porttitor. Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <img src="./assets/images/s1.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-4 mt-3">
                                    <p className="fs-5">Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh.</p><br />

                                    <p className="fs-5">Fusce convallis sapien placerat tellus suscipit vehicula. Cras vitae diam ut justo elementum faucibus eget a diam. Etiam sodales a sem vitae fermentum.</p><br />

                                    <p className="fs-5">Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="p-4 mt-3">
                                    <p className="fs-5 p-3">Cras vitae diam ut justo elementum faucibus eget a diam. Etiam sodales a sem vitae fermentum..</p><br />

                                    <p className="fs-5 p-3">Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi.</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-3">
                                    <img src="./assets/images/s2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center align-items-center mt-5 fs-5 gap-5">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 mt-5">
                            <div className="col-md-12 text-center mb-3">
                                <div className="text-notice fs-2">RELATED NOTICE</div>
                                <div className="hr mb-2"></div>
                            </div>
                            {notices.map((notice, index) => (
                                <NoticeCard key={index} imageUrl={notice.imageUrl} title={notice.title} content={notice.content} />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default NoticeDetails