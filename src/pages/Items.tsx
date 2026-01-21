import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price?: number;
  description?: string;
  category?: string;
};

function Items() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const ids = [1, 2, 3, 4, 5, 6];

    Promise.all(
      ids.map(id =>
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(res => res.json())
      )
    ).then(data => {
      setProducts(data as Product[]);
    });
  }, []);

  return (
    <>
      <h1>Items Page</h1>

      <div className="grid">
        {products.map(product => (
          <button
            key={product.id}
            className="tile"
            onClick={() => addToCart(product.title)}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <p>{product.title}</p>
          </button>
        ))}
      </div>

      <p><Link to="/">Go to Home</Link></p>
      <p><Link to="/pages/cart">Go to Cart</Link></p>
    </>
  );
}

export default Items;
