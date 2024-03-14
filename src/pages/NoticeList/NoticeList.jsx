import { HashLink } from "react-router-hash-link";
import NoticeCard from "../../components/NoticeCard";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function NoticeList () {
    const notices = [
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/chicken-fast-food-notice2.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice3.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { imageUrl: "/assets/images/notice1.jpg", title: "Spice chicken", content: "Some quick example text to build on the card title and make up the bulk of the card's content." }
    ];
    return (
        <>
            <Layout>
                <section className="notice-section mt-4" id='notice-section'>
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
            </Layout>
        </>
    )
}

export default NoticeList