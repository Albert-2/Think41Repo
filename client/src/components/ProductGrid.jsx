import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products?page=1&limit=50")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {products.map((product) => (
        <Link
          to={`/products/${product._id}`}
          key={product._id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
            <p>${product.retail_price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
