import React from 'react';

function GalleryItem({ imageUrl, title, category }) {
    return (
        <div className="col-lg-3">
            <div className="gallery-item">
                <img src={imageUrl} alt="image" />
                <div className="gallery-overlay">
                    <div>
                        <h5>{title}</h5>
                        <p className="fst-italic">{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OurGallerySection() {
    const galleryItems = [
        { imageUrl: "/assets/images/g1.jpg", title: "ALIQUAM TINCIDUNT", category: "Dessert, Restaurant" },
        { imageUrl: "/assets/images/g2.jpg", title: "ALIQUAM TINCIDUNT", category: "Dinner" },
        { imageUrl: "/assets/images/g3.jpg", title: "ALIQUAM TINCIDUNT", category: "Restaurant" },
        { imageUrl: "/assets/images/g4.jpg", title: "ALIQUAM TINCIDUNT", category: "Restaurant" },
        { imageUrl: "/assets/images/g5.jpg", title: "ALIQUAM TINCIDUNT", category: "Dinner" },
        { imageUrl: "/assets/images/g6.jpg", title: "ALIQUAM TINCIDUNT", category: "Dinner" },
        { imageUrl: "/assets/images/g7.jpg", title: "ALIQUAM TINCIDUNT", category: "Dinner" },
        { imageUrl: "/assets/images/g8.jpg", title: "ALIQUAM TINCIDUNT", category: "Dessert" },
    ];

    return (
        <section className="our-gallery-section mt-150" id="gallery">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1>Our Gallery</h1>
                        <div className="hr mb-2"></div>
                        <p>Morbi in sem quis dui placerat ornare.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center gallery-nav-bar mt-3">
                        <a className="p-2 active" aria-current="page" href="#">ALL</a>
                        <a className="p-2 " aria-current="page" href="#">DESSERTS</a>
                        <a className="p-2 " aria-current="page" href="#">RESTAURANT</a>
                        <a className="p-2 " aria-current="page" href="#">DINNER</a>
                    </div>
                </div>
                <div className="row mt-4 g-0">
                    {galleryItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurGallerySection;
