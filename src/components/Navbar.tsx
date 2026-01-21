import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/pages/items">Items</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
