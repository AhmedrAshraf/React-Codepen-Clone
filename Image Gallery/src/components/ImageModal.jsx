const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt="Preview" />
      </div>
    </div>
  );
};

export default ImageModal;
