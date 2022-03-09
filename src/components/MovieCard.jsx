function MovieCard() {
    return (
        <div className="bg-dark text-white rounded d-flex">
            <div>
                <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg"
                    alt="" className="d-flex h-100 rounded" style={{width: 175}} />
            </div>
            <div className="p-4">
                <h2>Movie Title</h2>
                <div className="d-flex">
                    <p className="me-1">1994</p>
                    <p className="me-1">|</p>
                    <p>Drama</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugit eius esse saepe explicabo inventore aperiam voluptatem illo minus fuga iusto?
                </p>
                <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold m-0">129.99 SEK</p>
                    <div>
                        <button className="btn btn-light me-2">Details</button>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default MovieCard;