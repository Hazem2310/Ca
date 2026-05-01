import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { getMenuSections } from "../utilsStorage";

function Menu() {
  const { addToCart } = useCart();
  const [active, setActive] = useState("all");
  const sections = useMemo(() => getMenuSections(), []);
  const visible = active === "all" ? sections : sections.filter((s) => s.id === active);

  return (
    <>
      <Navbar />
      <main className="menu-page">
        <div className="menu-header">
          <p>CASABLANCA RESTAURANT</p>
          <h1>المنيو | התפריט</h1>
          <span>منيو 3D احترافي مع صور قابلة للتغيير</span>
        </div>

        <div className="category-tabs">
          <button className={active === "all" ? "active" : ""} onClick={() => setActive("all")}>الكل</button>
          {sections.map((s) => (
            <button key={s.id} className={active === s.id ? "active" : ""} onClick={() => setActive(s.id)}>{s.titleAr}</button>
          ))}
        </div>

        {visible.map((section) => (
          <section className="luxury-menu-section" key={section.id}>
            <div className="section-title"><span>{section.titleAr}</span><strong>{section.titleHe}</strong></div>
            <div className="menu-card-grid">
              {section.items.map((item) => (
                <div className="food-card" key={item.id}>
                  <div className="food-img-wrap">
                    <img src={item.image} alt={item.ar} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} />
                  </div>
                  <div className="food-content">
                    <h3>{item.ar}</h3>
                    <p>{item.he}</p>
                    <div className="food-bottom"><strong>{item.price}₪</strong><button onClick={() => addToCart(item)}>إضافة</button></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default Menu;
