import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Header from '../components/Header';
import { Router } from "@reach/router";

//Pages
import Home1 from '../Pages/Home1';
import Cart from '../Pages/Cart';
// import ProductDetails from "../Pages/ProductDetails";
// import SignIn from "../Pages/SignIn";
// import Register from "../Pages/Register";
// import MyAccount from "../Pages/MyAccount";


function Home() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home1 path="/" />
        {/* <MyAccount path="my-account" /> */}
        {/* <SignIn path="sign-in"/>
        <Register path="register"/> */}
        {/* <ProductDetails path="product-details/:productId"/> */}
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default Home;
