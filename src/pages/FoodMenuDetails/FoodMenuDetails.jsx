import Layout from "../../components/Layout/Layout"
import MenuItem from "../../components/MenuItem"


function FoodMenuDetails () {
    const menuItems = [
        { imageUrl: "/assets/images/t1.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t2.jpg", title: "Fresh Baked Chicken Pot Pie", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t3.jpg", title: "Butterball Turkey & Dressing", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t3.jpg", title: "Butterball Turkey & Dressing", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" }
        
    ];
    return (
        <>
            <Layout>
                <section className="food-menu-details-section mt-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <img src="./assets/images/beef-burger.png" alt="image" />
                                </div>
                                <div className="mt-5 p-5">
                                    <h1>BEEF BURGER</h1>
                                    <p className="fs-5">Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula. Cras vitae diam ut justo elementum faucibus eget a diam. Etiam sodales a sem vitae fermentum</p><br />
                                    <p className="fs-5">Curabitur pellentesque massa eu nulla et consequat porttitor arcu porttitor. Ea mei nostrum imperdiet deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend definitionem vim. Ut nec hinc dolor possim. An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi.</p>
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
                                <div className="text-notice fs-2">RELATED MENUS</div>
                                <div className="hr mb-2"></div>
                            </div>

                            {menuItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    indexNo={index}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default FoodMenuDetails
