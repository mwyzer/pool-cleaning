import { useState } from 'react'

function GoogleMap({ 
  address = "Jl. Maridih No.140, Pancoran Mas, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16436, Indonesia",
  businessName = "AquaClean Pool Services",
  zoom = 15,
  className = ""
}) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(`${businessName}, ${address}`)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=${zoom}`
  
  // For demo purposes, we'll use Google Maps search embed that works without API key
  // This will show the general area of Depok, Indonesia where the address is located
  const encodedAddressForEmbed = encodeURIComponent(address)
  const demoMapUrl = `https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodedAddressForEmbed}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`

  const handleMapLoad = () => {
    setIsLoading(false)
  }

  const openInGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <div className={`google-map ${className}`}>
      <div className="map-container">
        {isLoading && (
          <div className="map-loading">
            <div className="loading-spinner"></div>
            <p>Loading map...</p>
          </div>
        )}
        
        <iframe
          src={demoMapUrl}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${businessName}`}
          onLoad={handleMapLoad}
        />
        
        <div className="map-overlay">
          <div className="map-info">
            <h4>{businessName}</h4>
            <p>{address}</p>
            <button 
              className="map-directions-btn"
              onClick={openInGoogleMaps}
              aria-label="Get directions in Google Maps"
            >
              📍 Get Directions
            </button>
          </div>
        </div>
      </div>
      
      <div className="map-fallback">
        <p>
          <strong>Our Office Location:</strong><br />
          {address}
        </p>
        <button 
          className="btn btn-secondary"
          onClick={openInGoogleMaps}
        >
          View on Google Maps
        </button>
      </div>
    </div>
  )
}

export default GoogleMap