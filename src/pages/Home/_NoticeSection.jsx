import React from 'react';

function NoticeCard({ imageUrl, title, content }) {
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn text-primary">Read More...</a>
                </div>
            </div>
        </div>
    );
}

function NoticeSection() {
    const notices = [
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
    ];

    return (
        <section className="notice-section mt-150">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-12 text-center mb-3">
                        <div className="text-notice fs-2">NOTICE</div>
                        <div className="hr mb-2"></div>
                    </div>
                    {notices.map((notice, index) => (
                        <NoticeCard key={index} imageUrl={notice.imageUrl} title={notice.title} content={notice.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NoticeSection;
