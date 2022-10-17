import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Text-Editor',
      project: 'Portfolio',
      url: 'https://secure-tor-11713.herokuapp.com/'
    },
    {
      name: 'Match-Gamers',
      project: 'Portfolio',
      url: 'https://github.com/rmisu/match-gamers'
    },
    {
      name: 'Pick-Up',
      project: 'Portfolio',
      url: 'https://pick-up-event.herokuapp.com/'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.project === project);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;