import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="row p-5">
                <div className="col-md-6 p-4">
                    <h1 className="mb-4">The Godfather</h1>
                    <div className="d-flex fw-bold">
                        <p className="me-1">1994</p>
                        <p className="me-1">|</p>
                        <p>Drama</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Sapiente veniam modi, unde temporibus ullam asperiores, 
                        sit voluptas officiis dolore placeat, deserunt laborum 
                        dicta tempore saepe consequuntur magni assumenda sint officia.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Sapiente veniam modi, unde temporibus ullam asperiores, 
                        sit voluptas officiis dolore placeat, deserunt laborum 
                        dicta tempore saepe consequuntur magni assumenda sint officia.
                    </p>
                    <p className="fw-bold">129.99 SEK</p>
                    <button className="btn btn-primary">Purchase</button>
                </div>
                <div className="col-md-6 p-4">
                    <img src="https://m.media-amazon.com/images/M  /MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1  ,0,67,98_AL_.jpg" 
                        alt="" className="d-block h-100 mx-auto rounded" />
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M  /MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1  ,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M  /MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1  ,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M  /MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1  ,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
                <Link to="/" className="my-2 col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="https://m.media-amazon.com/images/M  /MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1  ,0,67,98_AL_.jpg" 
                        alt="" style={{height: 300}} className="rounded" />
                </Link>
            </div>
        </div>
    )
}

export default Home;