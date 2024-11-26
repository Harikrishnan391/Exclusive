import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/ui/Header";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/ui/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Sample from "./pages/Sample";
import OrderSucess from "./pages/OrderSucess";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/orderSuccess" element={<OrderSucess />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
