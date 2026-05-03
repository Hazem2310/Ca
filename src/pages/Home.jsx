import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homeImages, menuSections, translations } from "../data/siteData";

function Home() {
  const [lang, setLang] = useState("ar");
  const t = translations?.[lang] || translations?.ar;

  const allItems = menuSections.flatMap((s) => s.items);

  const signatureItems = [
    allItems.find((x) => x.ar.includes("موزات")),
    allItems.find((x) => x.ar.includes("شرمس")),
    allItems.find((x) => x.ar.includes("شقف خروف")),
  ].filter(Boolean);

  return (
    <div className={lang === "en" ? "ltr" : "rtl"}>
      <Navbar lang={lang} setLang={setLang} />

      <section
        className="fire-home-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.9)), url(${homeImages.hero})`,
        }}
      >
        <div className="fire-glow one"></div>
        <div className="fire-glow two"></div>

        <div className="fire-hero-content">
          <img src="/images/logo.png" alt="Casablanca Logo" className="hero-logo" />

          <p className="gold-label">CASABLANCA RESTAURANT</p>
          <h1>كازابلانكا — تجربة فاخرة بطعم شرقي أصيل</h1>
          <p>
            مشاوي، أسماك، فواكه بحر، مقبلات وحلويات تُحضّر بعناية لتمنحكم
            تجربة طعام راقية لا تُنسى.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="gold-btn">شاهد المنيو</Link>
            <Link to="/cart" className="outline-gold-btn">سلة الطلبات</Link>
          </div>
        </div>
      </section>

      <section className="signature-fire-section">
        <p className="gold-label center">SIGNATURE DISHES</p>
        <h2>وجبات مميزة</h2>
        <span className="section-subtitle">
          أشهر اختيارات كازابلانكا بتقديم فاخر وصور ثلاثية الحركة
        </span>

        <div className="signature-fire-grid">
          {signatureItems.map((item, index) => (
            <div className={`fire-dish-card dish-${index + 1}`} key={item.id}>
              <div className="fire-dish-img">
                <img src={item.image} alt={item.ar} />
              </div>

              <div className="fire-dish-info">
                <h3>{item.ar}</h3>
                <p>{item.he}</p>
                <strong>{item.price}₪</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="premium-story">
        <div className="story-copy">
          <p className="gold-label">OUR STORY</p>
          <h2>رحلة قصيرة إلى الشرق</h2>
          <p>
            مطعم كازابلانكا يأخذكم إلى مطبخ عربي شرقي فاخر، يجمع بين
            الأصالة، النكهة، الأجواء الراقية والخدمة الدافئة.
          </p>
          <Link to="/menu" className="dark-gold-btn">اكتشف الأطباق</Link>
        </div>

        <div className="story-video-card">
          <video src="/videos/home-video.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

      <section className="luxury-gallery">
        {homeImages.gallery.map((img, i) => (
          <img src={img} key={i} alt="Casablanca Gallery" />
        ))}
      </section>

      <footer className="fire-footer">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Casablanca Logo" />
          <h2>CASABLANCA</h2>
          <p>طعم شرقي فاخر وتجربة لا تُنسى.</p>
        </div>

        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <p>📞 0546577363</p>
          <p>📞 0545681289</p>
          <p>☎ 046209850</p>
          <p>📸 Instagram: @casablanca</p>
        </div>

        <div className="footer-links">
          <Link to="/">الرئيسية</Link>
          <Link to="/menu">المنيو</Link>
          <Link to="/cart">السلة</Link>
        </div>

        <span>© 2026 Casablanca Restaurant. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;