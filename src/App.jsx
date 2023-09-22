/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import ProductPage from "./components/views/ProductPage";
import CartPage from "./components/views/CartPage";
import CheckoutPage from "./components/views/CheckoutPage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductsPage from "./components/views/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-28 bg-gray-100">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
