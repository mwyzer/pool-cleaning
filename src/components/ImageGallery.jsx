import React, { useState } from "react";

// Sample images data - in a real app, these would be actual image URLs
const sampleImages = [
  {
    id: 1,
    src: "/images/pool1.jpg",
    alt: "Crystal clear pool after professional cleaning",
    title: "Before & After: Weekly Cleaning Service",
    category: "cleaning",
    resolution: "1920x1080",
    format: "JPEG",
  },
  {
    id: 2,
    src: "/images/pool2.jpg",
    alt: "Professional pool cleaning in progress",
    title: "Our Team at Work",
    category: "service",
    resolution: "1920x1080",
    format: "JPEG",
  },
  {
    id: 3,
    src: "⚗️",
    alt: "Pool chemical testing and balancing",
    title: "Chemical Testing & Balancing",
    category: "maintenance",
  },
  {
    id: 4,
    src: "🔧",
    alt: "Pool equipment maintenance and repair",
    title: "Equipment Maintenance",
    category: "maintenance",
  },
  {
    id: 5,
    src: "🌊",
    alt: "Sparkling pool water",
    title: "Perfect Water Quality",
    category: "cleaning",
  },
  {
    id: 6,
    src: "🏠",
    alt: "Beautiful backyard pool",
    title: "Residential Pool Service",
    category: "service",
  },
];

function ImageGallery({ showTitle = true, maxImages = null }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ["all", "cleaning", "service", "maintenance"];

  const filteredImages =
    selectedCategory === "all"
      ? sampleImages
      : sampleImages.filter((img) => img.category === selectedCategory);

  const displayImages = maxImages
    ? filteredImages.slice(0, maxImages)
    : filteredImages;

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="image-gallery">
      {showTitle && (
        <div className="gallery-header">
          <h2>Our Work Gallery</h2>
          <p>See the difference professional pool cleaning makes</p>
        </div>
      )}

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {displayImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div
              className="gallery-image"
              onClick={() => openLightbox(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openLightbox(image);
                }
              }}
            >
              <div className="placeholder-image">{image.src}</div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{image.title}</h3>
                  <p>Click to view</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayImages.length === 0 && (
        <div className="no-images">
          <p>No images found in the selected category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <div className="lightbox-image">
              <div className="placeholder-image large">{lightboxImage.src}</div>
            </div>
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.alt}</p>
              <p>
                <strong>Resolution: {lightboxImage.resolution}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
