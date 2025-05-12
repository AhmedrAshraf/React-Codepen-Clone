import ImageModal from "./ImageModal";
import { useState } from "react";

const images = [
  "https://picsum.photos/id/1011/400/300",
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1025/400/300",
  "https://picsum.photos/id/1027/400/300",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index}`}
          onClick={() => setSelectedImage(img)}
          className="gallery-img"
        />
      ))}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
