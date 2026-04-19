import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/Collection/ProductDetails";
import About from "./ReactRouterDom/Pages/About";
import Contact from "./Contact/Contact";
import AdminLogin from "./AdminLogin/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./ReactRouterDom/Pages/Home";
import Collection from "./Components/Collection/Collection";
import LogIn from "./LogIn";
import CartPage from "./ShoppingCart/CartPage";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from "./ShoppingCart/CommonContext";



export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/collection" element={<Collection></Collection>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/Admin" element={<AdminLogin></AdminLogin>}></Route>
            <Route path="/productDetails/:id" element={<ProductDetails></ProductDetails>}></Route>
            <Route path="/login" element={<LogIn></LogIn>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </CartProvider>

    </>
  )
}