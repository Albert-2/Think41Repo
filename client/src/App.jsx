import { Routes, Route } from "react-router-dom";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Product Store</h1>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
