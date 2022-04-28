import "./Checkout-Item.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove">&#10005;</div>
        </div>
    )
};

{/* <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
<span onClick={() => addItemToCart(cartItem)}>increment</span> */}

export default CheckoutItem;