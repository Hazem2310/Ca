import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [tapCount, setTapCount] = useState(0);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSecretAdmin = () => {
    const next = tapCount + 1;
    setTapCount(next);
    if (next >= 5) {
      setTapCount(0);
      navigate("/admin-login");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo secret-logo" onClick={handleSecretAdmin}>CASABLANCA</div>
      <div className="nav-links">
        <Link to="/">الرئيسية</Link>
        <Link to="/menu">المنيو</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={18} />
          <span>{count}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
