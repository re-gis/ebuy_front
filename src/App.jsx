/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductPage from "./components/views/ProductPage";
import CartPage from "./components/views/CartPage";
import CheckoutPage from "./components/views/CheckoutPage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductsPage from "./components/views/ProductsPage";
import ShippingAddress from "./components/views/ShippingAddress";
import Login from "./components/views/Login";
import Signup from "./components/views/Signup";
import NotFound from "./components/views/NotFound";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'

axios.defaults.baseURL = "http://127.0.0.1:8080";

function Layout() {
  const location = useLocation();
  const hideForRoutes = ["/login", "/register"];
  return (
    <>
    <ToastContainer />
      <div className="flex flex-col min-h-screen">
          {!hideForRoutes.includes(location.pathname) && <Header />}

          <main className="flex-grow p-28 bg-gray-100 w-[100%]">
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/shipping" element={<ShippingAddress />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {!hideForRoutes.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
