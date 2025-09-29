import React, { useState } from "react";

function GoogleMap({
  address = "Jl. Maridih No.140, Pancoran Mas, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16436, Indonesia",
  businessName = "AquaClean Pool Services",
  zoom = 15,
  className = "",
}) {
  const [isLoading, setIsLoading] = useState(true);

  const encodedAddress = encodeURIComponent(`${businessName}, ${address}`);
  const encodedAddressForEmbed = encodeURIComponent(address);
  const demoMapUrl = `https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodedAddressForEmbed}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  const handleMapLoad = () => setIsLoading(false);

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, "_blank");
  };

  return (
    <div className={`google-map ${className}`}>
      <div className="map-container">
        {isLoading && (
          <div className="map-loading">
            <div className="loading-spinner" />
            <p>Loading map...</p>
          </div>
        )}
        <iframe
          title={`Map showing location of ${businessName}`}
          src={demoMapUrl}
          width="100%"
          height="300"
          loading="lazy"
          style={{ border: 0, borderRadius: 8 }}
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
        />
        <div className="map-overlay">
          <div className="map-info">
            <h4>{businessName}</h4>
            <p>{address}</p>
            <button
              aria-label="Get directions in Google Maps"
              className="map-directions-btn"
              onClick={openInGoogleMaps}
            >
              📍 Get Directions
            </button>
          </div>
        </div>
      </div>

      <div className="map-fallback">
        <p>
          <strong>Our Office Location:</strong>
          <br />
          {address}
        </p>
        <button className="btn btn-secondary" onClick={openInGoogleMaps}>
          View on Google Maps
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AquaClean Pool Services</h3>
            <p>
              Professional pool cleaning and maintenance services to keep your
              pool crystal clear and ready for enjoyment.
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Regular Pool Cleaning</li>
              <li>Chemical Balancing</li>
              <li>Equipment Maintenance</li>
              <li>Pool Opening & Closing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📞 (555) 123-POOL</li>
              <li>✉️ info@aquaclean.com</li>
              <li>📍 123 Pool Lane, City, State</li>
            </ul>
          </div>

          <div className="footer-section footer-map">
            <h4>Find Us</h4>
            <GoogleMap />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 AquaClean Pool Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
