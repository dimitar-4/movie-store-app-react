function Bag() {
    return (
        <>
            <a className="btn btn-dark ms-auto" data-bs-toggle="offcanvas" href="#bag" role="button" aria-controls="bag">
                Bag
            </a>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="bag" aria-labelledby="bagLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="bagLabel">Bag</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bag;