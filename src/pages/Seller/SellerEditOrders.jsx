import React from 'react'
import SellerNavbar from '../../components/SellerNavbar'
import { Link } from 'react-router-dom'

const SellerEditOrders = () => {
  return (
    <div>
      <SellerNavbar />
      <Link to="/seller/dashboard">
        <button type="button" className="btn btn-primary btn-block btn-lg">Back</button>
      </Link>
      <h1>this is seller orders</h1>


    </div>
  )
}

export default SellerEditOrders
