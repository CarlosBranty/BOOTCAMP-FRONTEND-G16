import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <section
      style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
    >
      <h2>Lista de Productos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
        {products &&
          products.map((product) => {
            return (
              <button
                key={product.id}
                style={{ backgroundColor: "#0e0e0e" }}
                onClick={() => dispatch(addToCart(product))}
              >
                <img src={product.thumbnail} width={150}></img>
                <p>{product.title}</p>
              </button>
            );
          })}
      </div>
    </section>
  );
};

export default ProductList;
