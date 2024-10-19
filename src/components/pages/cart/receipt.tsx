import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import { PRODUCTS } from "../../../products";
import "./receipt.css";

const Receipt = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    // Function to handle printing the receipt
    const handlePrint = () => {
        window.print();
    };

    // Function to check if there are items in the cart
    const hasItemsInCart = () => {
        return Object.values(cartItems).some((quantity) => quantity > 0);
    };

    if (!hasItemsInCart()) {
        return <h1>No items in cart. Redirecting to shop.</h1>; 
    }

    return (
        <div className="receipt-container">
            <h2>Thank You for Your Order!</h2>
            <div className="receipt-details">
                <ul className="receipt-items-list">
                    {Object.keys(cartItems).map((itemId) => {
                        const itemQuantity = cartItems[itemId];
                        if (itemQuantity > 0) {
                            const product = PRODUCTS.find((prod) => prod.id === Number(itemId));
                            return (
                                <li className="receipt-item" key={itemId}>
                                    <div className="item-info">
                                        <img src={product?.productImage} alt={product?.productName} style={{ width: '100px', height: '100px' }} />
                                        <span className="item-name">{product?.productName}</span>
                                        <span className="item-quantity">Quantity: {itemQuantity}</span>
                                        <span className="item-price">Price: ${(itemQuantity * product?.price).toFixed(2)}</span>
                                    </div>
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
                <div className="receipt-total">Total: ${totalAmount.toFixed(2)}</div>
            </div>
            <div className="receipt-actions">
                <button className="receiptButton" onClick={handlePrint}>
                    Print Receipt
                </button>
                <button className="receiptButton" onClick={() => navigate("/")}>
                    Back to Shop
                </button>
            </div>
        </div>
    );
};

export default Receipt;
