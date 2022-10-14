import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, url } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <a href={url} target="_blank" rel="noopener noreferrer">Link</a>
        <br></br>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
