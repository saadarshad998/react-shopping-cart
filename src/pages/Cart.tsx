import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, clearCart } = useCart();

    return (
        <>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name} x{item.quantity}</li>
                    ))}
                </ul>
            )}
            <p><button onClick={() => clearCart()}>Clear Items</button></p>
             <p><button
                onClick={() =>
                    cart.length > 0
                    ? alert("Checkout functionality coming soon!")
                    : alert("Your cart is empty")
                }
                >
                Checkout
                </button></p>


           <p><Link to="/">Go to Home</Link></p>
            <p><Link to="/pages/items">Go to Items</Link></p>
        </>
    );
}

export default Cart;