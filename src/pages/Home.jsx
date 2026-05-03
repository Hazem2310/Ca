import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homeImages, menuSections, translations } from "../data/siteData";

function Home() {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];

  const featured = menuSections.flatMap((s) => s.items).slice(20, 28);

  return (
    <div className={lang === "en" ? "ltr" : "rtl"}>
      <Navbar lang={lang} setLang={setLang} />

      <section
        className="black-gold-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.66), rgba(0,0,0,.88)), url(${homeImages.hero})`,
        }}
      >
        <div className="gold-orb orb-one"></div>
        <div className="gold-orb orb-two"></div>

        <div className="hero-luxury-content">
          <p className="luxury-label">CASABLANCA RESTAURANT</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <div className="hero-buttons">
            <Link to="/menu" className="gold-btn">
              {t.orderNow}
            </Link>
            <Link to="/menu" className="outline-gold-btn">
              {t.exploreMenu}
            </Link>
          </div>
        </div>

        <div className="floating-food-stage">
          {featured.slice(0, 3).map((item, index) => (
            <div className={`floating-food food-${index + 1}`} key={item.id}>
              <img src={item.image} alt={item.ar} />
              <h3>{lang === "he" ? item.he : item.ar}</h3>
              <strong>{item.price}₪</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="premium-story">
        <div className="story-copy">
          <p className="luxury-label">OUR STORY</p>
          <h2>{t.storyTitle}</h2>
          <p>{t.storyText}</p>
          <Link to="/menu" className="dark-gold-btn">
            {t.exploreMenu}
          </Link>
        </div>

        <div className="story-video-card">
          <video src="/videos/home-video.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

      <section className="signature-section">
        <p className="luxury-label center">{t.signature}</p>
        <h2>{t.signature}</h2>

        <div className="signature-3d-grid">
          {featured.slice(0, 4).map((item, index) => (
            <div className={`signature-card delay-${index}`} key={item.id}>
              <div className="signature-img">
                <img src={item.image} alt={item.ar} />
              </div>

              <div className="signature-info">
                <h3>
                  {lang === "he" ? item.he : lang === "en" ? item.ar : item.ar}
                </h3>
                <p>{lang === "he" ? item.ar : item.he}</p>
                <strong>{item.price}₪</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="luxury-gallery">
        {homeImages.gallery.map((img, i) => (
          <img src={img} key={i} alt="Casablanca Gallery" />
        ))}
      </section>

      <footer className="luxury-footer">
        <div>
          <h2>CASABLANCA</h2>
          <p>{t.footerText}</p>
        </div>

        <div className="footer-links">
          <Link to="/">{t.home}</Link>
          <Link to="/menu">{t.menu}</Link>
          <Link to="/cart">{t.cart}</Link>
        </div>

        <span>© 2026 Casablanca Restaurant. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;