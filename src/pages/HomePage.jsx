import { Link } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Crystal Clear Pools, Every Time</h1>
          <p>Professional swimming pool cleaning and maintenance services that keep your pool sparkling clean and ready for enjoyment year-round.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Free Quote</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">🏊‍♂️ Clean Pool Image</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Pool Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🧹</div>
              <h3>Regular Cleaning</h3>
              <p>Weekly or bi-weekly pool cleaning including skimming, vacuuming, and brushing walls and tiles.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚗️</div>
              <h3>Chemical Balancing</h3>
              <p>Professional water testing and chemical balancing to maintain perfect pH and sanitizer levels.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Equipment Maintenance</h3>
              <p>Filter cleaning, pump maintenance, and equipment inspections to keep your pool system running smoothly.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">❄️</div>
              <h3>Seasonal Services</h3>
              <p>Pool opening in spring and proper winterization to protect your investment during off-season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose AquaClean?</h2>
              <p>With over 10 years of experience in pool maintenance, we understand that your pool is more than just a luxury—it's your backyard oasis where memories are made.</p>
              <ul className="benefits-list">
                <li>✓ Licensed and insured professionals</li>
                <li>✓ Eco-friendly cleaning products</li>
                <li>✓ Flexible scheduling options</li>
                <li>✓ Emergency service available</li>
                <li>✓ 100% satisfaction guarantee</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="placeholder-image">👨‍🔧 Professional Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <ImageGallery showTitle={true} maxImages={6} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get Your Free Quote Today</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="regular-cleaning">Regular Cleaning</option>
                    <option value="chemical-balancing">Chemical Balancing</option>
                    <option value="equipment-maintenance">Equipment Maintenance</option>
                    <option value="seasonal-service">Seasonal Service</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <strong>📞 Phone:</strong> (555) 123-POOL
              </div>
              <div className="contact-item">
                <strong>✉️ Email:</strong> info@aquaclean.com
              </div>
              <div className="contact-item">
                <strong>📍 Service Area:</strong> City and surrounding areas
              </div>
              <div className="contact-item">
                <strong>🕒 Hours:</strong> Mon-Fri 8AM-6PM, Sat 9AM-4PM
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage