import { useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import MenuItem from "../../components/MenuItem";


function FoodMenuList() {
    let { slug } = useParams();

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
                <section>
                    <div className="row mt-3 p-5">
                        <div className="col-md-12 text-center mb-5 text-primary">
                            <h1 className="text-capitalize">{slug}</h1>
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
                </section>
            </Layout>
        </>
    )
}
export default FoodMenuList
