import { Link } from "react-router-dom";

function NoticeCard({ imageUrl, title, content }) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <Link to="/notice-details" className="btn text-primary">Read More...</Link>
                </div>
            </div>
        </div>
    );
}

export default NoticeCard