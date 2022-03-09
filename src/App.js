import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
