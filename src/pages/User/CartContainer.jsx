import React from 'react'

const CartContainer = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };
    return (
        <>
            <UserMyCart quantity={quantity} onQuantityChange={handleQuantityChange} />
            <OrderHistory quantity={quantity} />

        </>
    )
}

export default CartContainer
