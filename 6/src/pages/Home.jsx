import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Store/slices/userSlice";
import ProductCard from "../components/ProductCard";
import {
  getProductFail,
  getProductStart,
  getProductSuccess,
} from "../Store/slices/ProductSlice";

export default function Home() {
  const { token } = useSelector((state) => state.user);
  const { loading, error } = useSelector((state) => state.product);
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(getProductStart());
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
          dispatch(getProductSuccess());
        }
      } catch (error) {
        dispatch(getProductFail(error.message));
      }
    })();
  }, []);

  return (
    <div className="max-w-lg mx-auto ">
      <h1 className="text-center text-3xl mt-5">Home Page</h1>
      {token && (
        <p className="text-xs mt-5 line-clamp-1">
          <span className="font-semibold mr-2 text-lg">Token:</span>
          {token}
        </p>
      )}
      <button
        className="w-full mt-10 border-[1px] border-slate-400 hover:border-black duration-300 active:scale-95 py-2"
        onClick={() => dispatch(signOut())}
      >
        Logout
      </button>

      <h1 className="mt-10 text-center text-3xl font-light">Products : </h1>
      <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
        {loading ? (
          <h1 className="text-center mt-20 text-2xl font-semibold">
            "Loading..."
          </h1>
        ) : (
          products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
            />
          ))
        )}

        {!loading && error && <h1>{error}</h1>}
      </div>
    </div>
  );
}
