import React from 'react';
import ImageCard from './ImageCard';
import './ImageShow.css';

const ImageDisplay = (props) => {
  const list = props.image.map((img) => {
    return <ImageCard key={img.id} img={img} imgClick={props.imgClick} />;
  });
  return <div className="image-list">{list}</div>;
};

export default ImageDisplay;
