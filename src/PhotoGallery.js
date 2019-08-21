import React from 'react';
import './PhotoGallery.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const IMAGES = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class PhotoGallery extends React.Component {
  render () {
    return (
      <div>
        <h1>Photo Gallery</h1>
        { IMAGES.map((img, idx) => {
            return (
              <img 
              key={idx}
              src={img} 
              alt="Adventures" 
            />
            )
          })}
    </div>
    );
  }
}

export default PhotoGallery;

