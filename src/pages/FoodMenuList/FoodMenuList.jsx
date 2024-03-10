import { useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout"

function FoodMenuList() {
    let {slug} = useParams();

    const menuItems = [
        { imageUrl: "/assets/images/t1.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t2.jpg", title: "Fresh Baked Chicken Pot Pie", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t3.jpg", title: "Butterball Turkey & Dressing", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t4.jpg", title: "Mushroom ‘n Swiss Chicken", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t1.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t2.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t3.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
        { imageUrl: "/assets/images/t4.jpg", title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
    ];
    
    return (
        <>
            <Layout>
                {/* <section>
                    <div className="row mt-3 p-5">
                        <div className="col-md-12 text-center mb-5 text-primary">
                            <h1 className="text-capitalize">{slug}</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex gap-3 menu-item-card">
                                <div className="position-relative">
                                    <img src="/assets/images/t1.jpg" alt="image" />
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
                                    <img src="/assets/images/t2.jpg" alt="image" />
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
                                    <img src="/assets/images/t3.jpg" alt="image" />
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
                                    <img src="/assets/images/t4.jpg" alt="image" />
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
                                    <img src="/assets/images/t1.jpg" alt="image" />
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
                                    <img src="/assets/images/t2.jpg" alt="image" />
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
                                    <img src="/assets/images/t3.jpg" alt="image" />
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
                                    <img src="/assets/images/t4.jpg" alt="image" />
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
                </section> */}
                <div className="row mt-3 p-5">
                            {menuItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                        </div>
            </Layout>
        </>
    )
}
export default FoodMenuList
