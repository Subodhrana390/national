import React, { useState } from "react";

const FullScreenImage = ({ src, alt, imgStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src={src} alt={alt} />
      {isOpen && (
        <div className="" onClick={toggleModal}>
          <div className="" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} loading="lazy" className={imgStyle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenImage;
