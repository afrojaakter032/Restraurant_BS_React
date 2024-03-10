import { useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout"

function MenuItem({ imageUrl, title, description, price }) {
    return (
        <div className="col-md-6">
            <div className="d-flex gap-3 menu-item-card">
                
                    <div className="position-relative">
                        <img className="rounded-circle" src={imageUrl ?? "https://placehold.co/80x80?text=Restraurant"}  alt="image"  />
                        <div className="menu-bedge">New</div>
                    </div>
                
                <div className="w-100">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="text-primary text-end">{price}</div>
            </div>
        </div>
    );
}
function FoodMenuList() {
    let { slug } = useParams();

    const menuItems = [
        { imageUrl: null, title: "Roasted Steak Roulade", description: "Mint parsley with apple cider vinegar, salt, sugar & spices", price: "$20.15" },
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
                <section>
                    <div className="row mt-3 p-5">
                        <div className="col-md-12 text-center mb-5 text-primary">
                            <h1 className="text-capitalize">{slug}</h1>
                        </div>

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
                </section>
            </Layout>
        </>
    )
}
export default FoodMenuList
