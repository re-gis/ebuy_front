/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/views/ProductPage";
import CartPage from "./components/views/CartPage";
import CheckoutPage from "./components/views/CheckoutPage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductsPage from "./components/views/ProductsPage";
import ShippingAddress from "./components/views/ShippingAddress";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-28 bg-gray-100 w-[100%]">
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/shipping" element={<ShippingAddress />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
