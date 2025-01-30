import React from "react";

const Photo = ({ src }) => {
  return (
    <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-full object-cover" src={src} alt="Gallery Image" />
    </div>
  );
};

export default Photo;
