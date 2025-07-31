import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product", err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h2>{product.name}</h2>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Department:</strong> {product.department}
      </p>
      <p>
        <strong>Retail Price:</strong> ${product.retail_price}
      </p>
      <p>
        <strong>Cost:</strong> ${product.cost}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
    </div>
  );
}
