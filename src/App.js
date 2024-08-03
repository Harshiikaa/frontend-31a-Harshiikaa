import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPass from './pages/Auth/ForgotPass';
import LandingPage from './pages/Auth/LandingPage';
import HomePage from './pages/User/HomePage';

import SellerDashboard from './pages/Seller/SellerDashboard';
import SellerEditProduct from './pages/Seller/SellerEditProduct';
import SellerEditOrders from './pages/Seller/SellerEditOrders';
import SellerEditProfile from './pages/Seller/SellerEditProfile';
import SellerProduct from './pages/Seller/SellerProduct';
import SellerRoutes from './protected/SellerRoutes';

import UserRoutes from './protected/UserRoutes';
import UserFavorite from './pages/User/UserFavorite';
import UserMyCart from './pages/User/UserMyCart';
import UserNotification from './pages/User/UserNotification';
import UserProfile from './pages/User/UserProfile';
import SellerLogin from './pages/Auth/SellerLogin';
import SellerRegister from './pages/Auth/SellerRegister';
import ResetPassword from './pages/Auth/ResetPassword';
import ArtsAndPaintings from './pages/User/Categories/ArtsAndPaintings';
import AntiqueJewelry from './pages/User/Categories/AntiqueJewelry';
import EmbroideryAndNeedleWork from './pages/User/Categories/EmbroideryAndNeedleWork';
import HomeDecors from './pages/User/Categories/HomeDecors';
import MasksAndCostumes from './pages/User/Categories/MasksAndCostumes';
import MacrameAndKnotting from './pages/User/Categories/MacrameAndKnotting';
import MusicalInstruments from './pages/User/Categories/MusicalInstruments';
import Others from './pages/User/Categories/Others';
import PotteryAndCeramics from './pages/User/Categories/PotteryAndCeramics';


// import ProductDetails from './pages/User/ProductDetails';
import UserEditProfile from './pages/User/UserEditProfile';
import SellerProfile from './pages/Seller/SellerProfile';
import ProductDetails from './pages/User/ProductDetails';
import CategoriesPage from './pages/Auth/CategoriesPage';
import SellerRatingAndReview from './pages/Seller/SellerRatingAndReview';
import OrderHistory from './pages/User/OrderHistory';



const App = () => {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/category" element={<Categories />} /> */}

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sellerLogin" element={<SellerLogin />} />
        <Route path="/sellerRegister" element={<SellerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        {/* <Route path="/resetPassword" element={<ResetPassword />} /> */}

        {/* User Authorization */}
        <Route path='user' element={<UserRoutes />} >
          <Route path="home" element={<HomePage />} />
          <Route path="resetPassword/:token" element={<ResetPassword />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="profileEdit/:id" element={<UserEditProfile />} />
          <Route path="favorites" element={<UserFavorite />} />
          <Route path="myCart" element={<UserMyCart />} />
          <Route path="notifications" element={<UserNotification />} />
          <Route path="antiqueJewelry" element={<AntiqueJewelry />} />
          <Route path="embroideryAndNeedleWork" element={<EmbroideryAndNeedleWork />} />
          <Route path="homeDecors" element={<HomeDecors />} />
          <Route path="potteryAndCeramics" element={<PotteryAndCeramics />} />
          <Route path="musicalInstruments" element={<MusicalInstruments />} />
          <Route path="artsAndPaintings" element={<ArtsAndPaintings />} />
          <Route path="masksAndCostumes" element={<MasksAndCostumes />} />
          <Route path="macrameAndKnotting" element={<MacrameAndKnotting />} />
          <Route path="others" element={<Others />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
          <Route path="pageAfterCheckout" element={<pageAfterCheckout />} />
          <Route path="orderHistory" element={<OrderHistory />} />
        </Route>

        <Route path='seller' element={<SellerRoutes />}>
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<SellerProduct />} />
          <Route path="productEdit/:id" element={<SellerEditProduct />} />
          <Route path="orders" element={<SellerEditOrders />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="profileEdit/:id" element={<SellerEditProfile />} />
          <Route path="ratingAndReview" element={<SellerRatingAndReview />} />
          {/* <Route path="notifications" element={<ProductDetails />} /> */}
        </Route>
        {/* Admin Authorization */}
      </Routes>
    </Router>
  );
}

export default App;
