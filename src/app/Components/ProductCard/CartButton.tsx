"use client";

import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store/store";
import { addToCart } from "@/redux/slice/cartSlice";

export default function ProductCard({ product } :any) {

  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleAddAndRedirect = () => {
   dispatch(addToCart({
  ...product,
  quantity: 1
}));


    router.push("/Carts");
  };

  return (
    <div>
      <button
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleAddAndRedirect}
      >
        Add_To_cart
      </button>

    
    </div>
  );
}
