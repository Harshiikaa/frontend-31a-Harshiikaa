import React, { useEffect, useState } from 'react';
import SellerNavbar from '../../components/SellerNavbar';
import { getRatingsAndReviewsApi } from '../../apis/Api';
import { Link } from 'react-router-dom';

const SellerRatingAndReview = () => {
  return (
    <div>
      <SellerNavbar />
      <Link to="/seller/dashboard">
        <button type="button" className="btn btn-primary btn-block btn-lg">Back</button>
      </Link>
      <h1>This is Seller Rating And Review</h1>
    </div>
  );
};

export default SellerRatingAndReview;
