import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [loading, setLoading] = useState(true);
    const [featured, setFeatured] = useState();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/movies")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setMovies(json.data.slice(0, 4))
                setFeatured(json.data[4])
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <div className="row p-5">
                <div className="col-md-6 p-4">
                    <h1 className="mb-4">{featured.title}</h1>
                    <div className="d-flex fw-bold">
                        <p className="me-1">{featured.year}</p>
                        <p className="me-1">|</p>
                        <p>{featured.genres.map((g, i) => 
                            i === featured.genres.length - 1 ? g : g + ", "
                        )}</p>
                    </div>
                    <p>
                        {featured.description}
                    </p>
                    <p className="fw-bold">{featured.price} {featured.currency}</p>
                    <button className="btn btn-primary">Purchase</button>
                </div>
                <div className="col-md-6 p-4">
                    <img src={featured.poster} alt={featured.title + " poster"} className="d-block h-100 mx-auto rounded" />
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
            </div>
        </div>
    )
}

export default Home;