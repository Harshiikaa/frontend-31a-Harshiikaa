import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import { getFavoritesByUserIDApi, removeFavoritesApi } from '../../apis/Api';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import './UserMyCart.css';

const UserFavorite = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user._id)


  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    // Call your API function
    getFavoritesByUserIDApi(user._id)
      .then((res) => {
        console.log("API Response:", res.data);
        setFavorites(res.data.favorites);
      })
      .catch(err => {
        toast.error("Server Error")
        console.log(err.message)
      })
  }, [user._id]);
  console.log(favorites)


  const handleDelete = (id) => {
    const confirmDialog = window.confirm('Are you sure, you want to delete this favorites?')
    if (!confirmDialog) {
      return;
    }
    else {
      removeFavoritesApi(id).then((res) => {
        if (res.data.success == true) {
          window.location.reload()
          toast.success(res.data.success)
        }
        else {
          toast.error(res.data.message)
        }

      })
    }
  }


  return (
    <div>
      <UserNavbar />
      <h1>this is user favorite section</h1>
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-container">
            {favorites && favorites.length > 0 ? (
              favorites.map((item) => (
                <div key={item.userID} className="cart-item">
                  <img src={item.productID.productImageURL} className="cart-item-img" alt="Product Image" />
                  <div className="cart-item-details">
                    <h5 className="item-name">{item.productID.productName}</h5>
                    <p className="item-price">NPR.{parseFloat(item.productID.productPrice).toFixed(2)}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                      <button onClick={() => {
                        handleDelete(item._id)
                      }} className='btn btn-danger'>  <DeleteOutlineIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your Favorites is empty</p>
            )}
          </div>
        </div>

      </div>

      {/* <div className="card-container">
        {favorites && favorites.length > 0 ? (
          favorites.map((item) => (
            <div key={item.userID} className="card" style={{ width: '18rem', margin: '10px' }}>
              <img src={item.productID.productImageURL} className="card-img-top" alt="Card logo" />
              <div className="card-body">
                <h5 className="card-title">{item.productID.productName}</h5>
                <h8 className="card-price">NPR.{item.productID.productPrice}</h8>
                <p className="card-price-range">Time.{item.createdAt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <button onClick={() => ""
                    // handleDelete(item._id)
                  } className='btn btn-danger'>Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your Favorites is empty</p>
        )}
      </div> */}



    </div>
  )
}

export default UserFavorite
