
function MenuItem({ indexNo, imageUrl, title, description, price}) {
    console.log(indexNo)
    return (
        <>
            <div className="col-md-6">
                <div className="d-flex gap-3 menu-item-card">
                    <div className="position-relative">
                        <img className="rounded-circle" src={imageUrl}  alt="image"  />
                        <div className={'menu-bedge ' + (indexNo == 0 ? "d-block" : "d-none")}>New</div>
                    </div>
                    
                    <div className="w-100">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="text-primary text-end">{price}</div>
                </div>
            </div>
        </>
    );
}
export default MenuItem
