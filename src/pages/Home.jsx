import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homeImages } from "../data/siteData";
import { getMenuSections } from "../utilsStorage";

function Home() {
  const featured = getMenuSections().flatMap((s) => s.items).slice(0, 4);

  return (
    <>
      <Navbar />
      <section className="home-hero" style={{ backgroundImage: `linear-gradient(rgba(5,25,31,.72), rgba(5,25,31,.84)), url(${homeImages.hero})` }}>
        <div className="home-hero-content">
          <p>CASABLANCA RESTAURANT</p>
          <h1>טעם יוקרתי. تجربة شرقية فاخرة.</h1>
          <span>مشاوي • مقبلات • حلويات • طلبات أونلاين • Bit</span>
          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">اطلب الآن</Link>
            <Link to="/cart" className="secondary-btn">السلة</Link>
          </div>
        </div>
      </section>
      <section className="home-video-section">
  <div className="video-text">
    <p className="section-small">CASABLANCA EXPERIENCE</p>
    <h2>لمحة من أجواء كازابلانكا</h2>
    <span>فيديو قصير يعرض الأجواء، الأكل، والفخامة بطريقة راقية.</span>
  </div>

  <div className="video-3d-card">
    <video
      src="/videos/home-video.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</section>

      <section className="home-about">
        <div>
          <p className="section-small">ABOUT CASABLANCA</p>
          <h2>أجواء راقية، طعم أصيل، وتصميم حديث للطلبات</h2>
          <p>موقع كازابلانكا مصمم ليعرض المنيو بطريقة 3D احترافية مع إمكانية تعديل الصور والأسعار من صفحة الإدارة المخفية.</p>
          <Link to="/menu" className="dark-btn">شاهد المنيو</Link>
        </div>
        <img src={homeImages.about} alt="Casablanca restaurant" />
      </section>

      <section className="featured-section">
        <p className="section-small">FEATURED MENU</p>
        <h2>أشهر الأطباق</h2>
        <div className="featured-grid">
          {featured.map((item) => (
            <div className="featured-card" key={item.id}>
              <img src={item.image} alt={item.ar} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} />
              <div>
                <h3>{item.ar}</h3>
                <p>{item.he}</p>
                <strong>{item.price}₪</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <p className="section-small">CASABLANCA GALLERY</p>
        <h2>صور من الأجواء</h2>
        <div className="gallery-grid">
          {homeImages.gallery.map((img, i) => (
            <img src={img} alt={`gallery ${i + 1}`} key={i} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
