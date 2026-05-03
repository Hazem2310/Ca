import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { getMenuSections } from "../utilsStorage";

function Menu() {
  const { addToCart } = useCart();
  const [active, setActive] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const sections = useMemo(() => getMenuSections(), []);
  const visible =
    active === "all" ? sections : sections.filter((s) => s.id === active);

  return (
    <>
      <Navbar />

      <main className="menu-page premium-menu-page">
        <div className="menu-header premium-menu-header">
          <p>CASABLANCA RESTAURANT</p>
          <h1>المنيو | התפריט</h1>
          <span>
            أطباق شرقية فاخرة، مشاوي، أسماك، مقبلات ومشروبات مختارة بعناية
          </span>
        </div>

        <div className="category-tabs premium-tabs">
          <button
            className={active === "all" ? "active" : ""}
            onClick={() => setActive("all")}
          >
            الكل
          </button>

          {sections.map((s) => (
            <button
              key={s.id}
              className={active === s.id ? "active" : ""}
              onClick={() => setActive(s.id)}
            >
              {s.titleAr}
            </button>
          ))}
        </div>

        {visible.map((section) => (
          <section className="luxury-menu-section premium-section" key={section.id}>
            <div className="section-title">
              <span>{section.titleAr}</span>
              <strong>{section.titleHe}</strong>
            </div>

            <div className="menu-card-grid">
              {section.items.map((item) => (
                <div className="food-card premium-food-card" key={item.id}>
                  <div
                    className="food-img-wrap clickable-img"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.ar}
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />
                    <div className="img-overlay">عرض التفاصيل</div>
                  </div>

                  <div className="food-content">
                    <h3>{item.ar}</h3>
                    <p>{item.he}</p>

                    {item.desc && <span className="food-desc">{item.desc}</span>}

                    <div className="food-bottom">
                      <strong>{item.price}₪</strong>
                      <button onClick={() => addToCart(item)}>إضافة</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {selectedItem && (
        <div className="food-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="food-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              ×
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.ar}
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />

            <div className="modal-content">
              <p className="modal-label">CASABLANCA SPECIAL</p>
              <h2>{selectedItem.ar}</h2>
              <h3>{selectedItem.he}</h3>

              <p>
                {selectedItem.desc ||
                  "طبق مختار من مطعم كازابلانكا، يُحضّر بعناية وبنكهة شرقية فاخرة."}
              </p>

              <div className="modal-bottom">
                <strong>{selectedItem.price}₪</strong>
                <button
                  onClick={() => {
                    addToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                >
                  إضافة للسلة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;