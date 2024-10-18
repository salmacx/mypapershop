import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from './components/pages/shop/shop';
import Contact from './components/pages/contact/contact';
import Cart  from "./components/pages/cart/cart";
import Receipt from "./components/pages/cart/receipt"; // Import the receipt component
import { ShopContextProvider } from "./context/shop-context";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/receipt" element={<Receipt />} />
                        i<Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;