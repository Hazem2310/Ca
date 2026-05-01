import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { homeImages, menuSections } from "../data/siteData";

function Home() {
  const featured = menuSections.flatMap((s) => s.items).slice(0, 4);

  return (
    <>
      <Navbar />

      <section
        className="luxury-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,31,.74), rgba(5,25,31,.88)), url(${homeImages.hero})`,
        }}
      >
        <div className="hero-glass">
          <p className="gold-label">CASABLANCA RESTAURANT</p>
          <h1>رحلة قصيرة إلى الشرق</h1>
          <p className="hero-desc">
            مطعم كازابلانكا يأخذكم إلى مطبخ عربي شرقي فاخر، يجمع بين
            الأصالة، المشاوي، الأسماك، وفواكه البحر بأجواء راقية.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">شاهد المنيو</Link>
            <Link to="/cart" className="secondary-btn">سلة الطلبات</Link>
          </div>
        </div>

        <div className="hero-floating-card">
          <img src={homeImages.gallery[0]} alt="Casablanca dish" />
          <span>Fresh • Authentic • Luxury</span>
        </div>
      </section>

      <section className="home-video-section">
        <div className="video-text">
          <p className="gold-label">CASABLANCA EXPERIENCE</p>
          <h2>أجواء فاخرة وطعم لا يُنسى</h2>
          <span>
            شاهد لمحة قصيرة من أجواء المطعم، التفاصيل الراقية، والأطباق
            المحضّرة بعناية.
          </span>
        </div>

        <div className="video-3d-card">
          <video src="/videos/home-video.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

      <section className="story-section">
        <div className="story-text">
          <p className="gold-label">OUR STORY</p>
          <h2>أصالة شرقية بلمسة عصرية</h2>
          <p>
            يجمع كازابلانكا بين تراث المطبخ الشرقي والمأكولات الحديثة ذات
            الطابع المميز، مع أطباق بحرية، مشاوي مختارة، ومقبلات طازجة.
          </p>
          <p>
            نسعى دائمًا لتقديم تجربة طعام راقية مليئة بالنكهات، الجودة،
            والضيافة الأصيلة.
          </p>
          <Link to="/menu" className="dark-btn">اكتشف الأطباق</Link>
        </div>

        <div className="story-3d-images">
          <img src={homeImages.about} alt="Casablanca atmosphere" />
          <img src={homeImages.gallery[1]} alt="Casablanca food" />
        </div>
      </section>

      <section className="featured-section premium-featured">
        <p className="gold-label">SIGNATURE DISHES</p>
        <h2>أطباق مختارة</h2>

        <div className="featured-grid">
          {featured.map((item) => (
            <div className="featured-card luxury-food-card" key={item.id}>
              <img src={item.image} alt={item.ar} />
              <div>
                <h3>{item.ar}</h3>
                <p>{item.he}</p>
                <strong>{item.price}₪</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section luxury-gallery-section">
        <p className="gold-label">CASABLANCA GALLERY</p>
        <h2>لمحة من الأجواء</h2>

        <div className="moving-gallery">
          {homeImages.gallery.map((img, i) => (
            <img src={img} alt={`gallery ${i + 1}`} key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;