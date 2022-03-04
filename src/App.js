import Navbar from "./components/Navbar";

import './assets/slick/slick.css'
import './assets/slick/slick-theme.css'
import './styles/App.css'
import './assets/colors.css'

import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recents from "./Pages/Recents";
import Designers from "./Pages/Designers";
import Contactus from "./Pages/Contactus";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import User from "./Pages/User";

function App() {
  return (
    <Router>

      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/recents" element={<Recents />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User/>} />
      </Routes>

    </Router>
  );
}

export default App;