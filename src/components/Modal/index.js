import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, url } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <a href={url} target="blank"> </a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;