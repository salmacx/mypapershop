import { ShopContext } from "../../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import "./cart.css";
import { PRODUCTS } from "../../../products";

const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />;
                    }
                    return null;
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount.toFixed(2)}</p>
                    <div className="checkout-buttons"> {/* Flex container for buttons */}
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button
                            onClick={() => {
                                navigate("/receipt");
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <h1>Your Shopping Cart is Empty</h1>
            )}
        </div>
    );
};

export default Cart;
