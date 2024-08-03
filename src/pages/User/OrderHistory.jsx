import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import { getOrderByUserID } from '../../apis/Api';
import { toast } from 'react-toastify';

const OrderHistory = ({ subtotal }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user._id;
    console.log(id)
    const [orders, setOrders] = useState([])


    const calculateSubtotal = (item) => {
        // Ensure that required properties are available
        if (item && item.productID && typeof item.quantity === 'number' && typeof item.productID.productPrice === 'number') {
            console.log('item:', item);
            console.log('productPrice:', item.productID.productPrice);
            console.log('quantity:', item.quantity);

            // Calculate subtotal based on the items in the order
            return (item.quantity || 1) * item.productID.productPrice;
        } else {
            // Return a default value or handle the case where required data is missing
            return 0;
        }
    };



    useEffect(() => {
        // Call your API function
        getOrderByUserID(id)
            .then((res) => {
                console.log("API Response:", res.data);
                setOrders(res.data.orders);
            })
            .catch(err => {
                toast.error("Server Error")
                console.log(err.message)
            })
    }, [id]);
    console.log(orders)
    return (
        <div>
            <>
                <UserNavbar />
                <h2 className="text-center">User Orders</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        <div className="cart-container">
                            {orders && orders.length > 0 ? (
                                orders.map((item) => (
                                    <div key={item.userID} className="cart-item">
                                        <img src={item.productID.productImageURL} className="cart-item-img" alt="Product Image" />
                                        <div className="cart-item-details">
                                            <h5 className="item-name">{item.productID.productName}</h5>
                                            <p className="item-price">NPR.{parseFloat(item.productID.productPrice).toFixed(2)}</p>
                                            {/* Display subtotal calculated on the fly */}
                                            {/* <p className="item-subtotal">Subtotal: NPR.{(item.quantity) * item.productID.productPrice}</p> */}

                                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Your Order History is empty</p>
                            )}
                        </div>
                    </div>

                </div>            </>

        </div>
    )
}

export default OrderHistory
