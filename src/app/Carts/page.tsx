"use client";
import { useDispatch, useSelector } from "react-redux";
import { checkOut, clearCart, removeFromCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store/store";

export default function CartsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your cart is empty 🛒</h2>
        <p>Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛍️ Your Cart</h2>

      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li
            key={item.id ?? index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-contain p-0 bg-white"
              />
              <div>
                <strong>{item.title}</strong>
                <div className="text-muted">
                  ₹{item.price} × {item.quantity}
                </div>
              </div>
            </div>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex gap-2">
        <button
          className="mt-6  round text-center  border border-yellow-400 text-yellow-600 rounded-md p-2 hover:bg-red-800 hover:text-black transition"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <button
          className="mt-6  round text-center border border-yellow-400 text-yellow-600 rounded-md p-2 hover:bg-green-800 hover:text-black transition"
          onClick={() => dispatch(checkOut())}
        >
          Check-out
        </button>{" "}
      </div>
    </div>
  );
}
