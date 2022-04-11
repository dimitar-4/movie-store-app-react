import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import AboutContact from "./components/AboutContact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutContact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
