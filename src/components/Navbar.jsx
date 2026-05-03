import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Globe2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { translations } from "../data/siteData";

function Navbar({ lang = "ar", setLang }) {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [tapCount, setTapCount] = useState(0);

  const t = translations[lang];
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
    <nav className="premium-navbar">
      <div className="premium-logo" onClick={handleSecretAdmin}>
        <span>CASABLANCA</span>
        <small>Restaurant</small>
      </div>

      <div className="premium-links">
        <Link to="/">{t.home}</Link>
        <Link to="/menu">{t.menu}</Link>

        <Link to="/cart" className="premium-cart">
          <ShoppingCart size={18} />
          <span>{count}</span>
        </Link>

        <div className="lang-switch">
          <Globe2 size={17} />
          <button onClick={() => setLang("ar")}>AR</button>
          <button onClick={() => setLang("he")}>HE</button>
          <button onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;