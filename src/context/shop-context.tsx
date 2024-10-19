import { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetchCartItems();
    }, []);

    // Fetches cart items from the API and sets the state
    const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:5228/api/cart');
            if (response.ok) {
                const data = await response.json();
                const cartData = { ...getDefaultCart() };

                // Map backend data to the expected format
                data.forEach((item) => {
                    if (PRODUCTS.some((product) => product.id === item.productId)) {
                        cartData[item.productId] = item.quantity;
                    }
                });

                setCartItems(cartData);
            } else {
                console.error("Error fetching cart items:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    // Calculates the total amount in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    // Adds an item to the cart
    const addToCart = async (itemId) => {
        try {
            const response = await fetch('http://localhost:5228/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: itemId, quantity: 1 }),
            });

            if (response.ok) {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            } else {
                console.error("Error adding to cart:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    // Removes an item from the cart
    const removeFromCart = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:5228/api/cart/${itemId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCartItems((prev) => {
                    const newCart = { ...prev };
                    if (newCart[itemId] > 1) {
                        newCart[itemId] -= 1;
                    } else {
                        newCart[itemId] = 0; 
                    }
                    return newCart;
                });
            } else {
                console.error("Error removing from cart:", response.statusText);
            }
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };

    // Updates the item count in the cart
    const updateCartItemCount = async (newAmount, itemId) => {
        try {
            const response = await fetch(`http://localhost:5228/api/cart/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity: newAmount }),
            });

            if (response.ok) {
                setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
            } else {
                console.error("Error updating cart item:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating cart item:", error);
        }
    };

    // Handles checkout and clears the cart
    const checkout = async () => {
        try {
            const response = await fetch('http://localhost:5228/api/cart/checkout', {
                method: 'POST',
            });

            if (response.ok) {
                setCartItems(getDefaultCart()); // Clear cart after successful checkout
            } else {
                console.error("Error during checkout:", await response.text());
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
