import React from 'react';

function SpecialItem({ imageUrl, title, description, price, category }) {
    return (
        <div className="col-md-6 col-lg-3">
            {imageUrl ? (
                <img src={imageUrl} alt="image" />
            ) : (
                <div className="card text-center pt-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <span className="fs-3">{price}</span>
                        <p className="text-dark">in {category}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function TodaysSpecialSection() {
    const specials = [
        { imageUrl: "/assets/images/sp1.jpg", title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Dinners" },
        { imageUrl: null, title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Breakfast" },
        { imageUrl: "/assets/images/sp2.jpg", title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Desserts" },
        { imageUrl: null, title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Breakfast" },
        { imageUrl: null, title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Breakfast" },
        { imageUrl: "/assets/images/sp3.jpg", title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Specials" },
        { imageUrl: null, title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Breakfast" },
        { imageUrl: "/assets/images/sp4.jpg", title: "CAMPHO LINDO CHICKEN", description: "Praesent dapibus, neque id cursus faucibus, tortor neque", price: "$20.15", category: "Desserts" }
        
    ];

    return (
        <section className="todays-special-section mt-150" id="todays-special">
            <div className="container-fluid">
                <div className="text-center col-md-12 pt-4">
                    <h1>Today's Special</h1>
                    <div className="hr mb-2"></div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam<br />malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede</p>
                </div>
                <div className="todays-special-gallery mt-4 p-5">
                    <div className="row g-0">
                        {specials.map((special, index) => (
                            <SpecialItem
                                key={index}
                                imageUrl={special.imageUrl}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                                category={special.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TodaysSpecialSection;
