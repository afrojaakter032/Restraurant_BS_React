import { Link } from "react-router-dom";

function MenuItem({ indexNo, imageUrl, title, description, price}) {
    
    return (
        <>
            <div className="col-md-6">
                <div className="d-flex gap-3 menu-item-card">
                    <div className="position-relative">
                        <img className="rounded-circle" src={imageUrl}  alt="image"  />
                        <div className={'menu-bedge ' + (indexNo == 0 ? "d-block" : "d-none")}>New</div>
                    </div>
                    
                    <div className="w-100">
                        <Link to="/food-menu-details" className="text-decoration-none text-dark"><h4>{title}</h4></Link>
                        <p>{description}</p>
                    </div>
                    <div className="text-primary text-end">{price}</div>
                </div>
            </div>
        </>
    );
}
export default MenuItem
