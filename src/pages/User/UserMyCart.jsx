import React, { useEffect, useState } from 'react';
import './UserMyCart.css';
import UserNavbar from '../../components/UserNavbar';
import { createOrderApi, getCartByUserIDApi, removeFromCartApi, updateCartApi } from '../../apis/Api';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import OrderHistory from './OrderHistory';

const UserMyCart = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user._id);

  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const [userID, setUserID] = useState('')
  const [cartID, setCartID] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [productID, setProductID] = useState('')
  const [order, setOrder] = useState('')
  
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);



  const handleProceedToCheckout = () => {
    // Perform cart update
    setCartUpdated(true);

    // Show confirmation dialogue
    setShowConfirmation(true);

  };



  const handleConfirmOrder = (e) => {
    e.preventDefault();

    // Assuming you want to get an array of cart IDs
    const cartIDs = cart.map((item) => item._id);
    const productIDs = cart.map((item) => item.productID._id);

    const formData = new FormData();
    formData.append('userID', user._id);
    // Append an array of cart IDs and productIDs
    cartIDs.forEach((cartID, index) => {
      formData.append(`cartIDs[${index}]`, cartID);
      formData.append(`productIDs[${index}]`, productIDs[index]);

    });

    const orderDate = new Date().toISOString();
    formData.append('orderDate', orderDate);

    createOrderApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          setShowConfirmation(false);

        }
      })
      .catch((err) => {
        toast.error('Server Error');
        console.log(err.message);
      });
  };




  const handleCancelOrder = () => {
    // Close the confirmation dialogue
    setShowConfirmation(false);
  };


  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  useEffect(() => {
    getCartByUserIDApi(user._id)
      .then((res) => {
        console.log('API Response:', res.data);
        setCart(res.data.cart);

        // Set initial quantity and productPrice from the first item in the cart
        if (res.data.cart && res.data.cart.length > 0) {
          setQuantity(res.data.cart[0].quantity || 1);
          setProductPrice(res.data.cart[0].productID.productPrice || 0);
        }
      })
      .catch((err) => {
        toast.error('Server Error');
        console.log(err.message);
      });
  }, [user._id]);

  const calculateCartTotal = () => {
    let newSubtotal = 0;

    // Calculate subtotal based on the items in the cart
    cart.forEach((item) => {
      newSubtotal += (item.quantity || 1) * item.productID.productPrice;
    });

    // Set both subtotal and total to the calculated subtotal
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  };

  const handleDelete = (id) => {
    const confirmDialog = window.confirm('Are you sure, you want to remove from cart?');
    if (!confirmDialog) {
      return;
    } else {
      removeFromCartApi(id)
        .then((res) => {
          if (res.data.success === true) {
            window.location.reload();
            toast.success(res.data.success);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId ? { ...item, quantity: Math.min(5, Math.max(1, newQuantity)) } : item
    );
    setCart(updatedCart);
    setCartUpdated(true);
  };


  useEffect(() => {
    if (cartUpdated) {
      const updatedProducts = cart.map((item) => ({
        productID: item.productID._id,
        quantity: item.quantity,
      }));

      updateCartApi(user._id, { products: updatedProducts })
        .then((res) => {
          console.log(res.data);
          setCartUpdated(false);
        })
        .catch((error) => {
          console.error(error.message);
          setCartUpdated(false);
        });
    }
  }, [cartUpdated, user._id]);

  const calculateSubtotal = (item) => {
    // Calculate subtotal based on the items in the order
    return (item.quantity || 1) * item.productID.productPrice;
  };

  return (
    <div>
      <UserNavbar />
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-items">
          <div className="cart-container">
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.userID} className="cart-item">
                  <img src={item.productID.productImageURL} className="cart-item-img" alt="Product Image" />
                  <div className="cart-item-details">
                    <h5 className="item-name">{item.productID.productName}</h5>
                    <p className="item-price">NPR.{item.productID.productPrice}</p>
                    <div className="quantity-container">
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        className="item-quantity"
                        type="number"
                        min={1}
                        max={5}
                        value={item.quantity || 1}
                        onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value, 10))}
                      />
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-subtotal">NPR.{(item.quantity || 1) * item.productID.productPrice}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                        className="btn btn-danger"
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your Cart is empty</p>
            )}
          </div>
        </div>
        {/* <OrderHistory cart={cart} /> */}
        <div className="cart-summary">
          <p className="total">Total: NPR.{total}</p>
          {/* <button className="checkout-btn" onClick={() => setCartUpdated(true)}> */}
          <button className="checkout-btn" onClick={handleProceedToCheckout}>
            Proceed to checkout
          </button>
        </div>
        {/* Confirmation Dialogue */}
        {showConfirmation && (
          <div className="confirmation-dialogue-container">
            <div className="confirmation-dialogue p-3 bg-light border rounded">
              <p className="mb-3">Do you really want to place the order?</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-success"
                  onClick={handleConfirmOrder}
                >
                  Yes
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancelOrder}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserMyCart;

