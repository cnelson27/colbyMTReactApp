import React from 'react';
import './PhotoGallery.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class PhotoGallery extends React.Component {
  render () {
    return (
      <div>
        
        <h1>Photo Gallery</h1>
        <div className='row'>
        {console.log(images[0])}
        {images.map((img, idx) => {
            return (
              <img 
              key={idx}
              className='galleryImage col-md-3'
              src={img} 
              alt="Adventures"
            />
            )
          })}
        </div>
    </div>
    );
  }
}

export default PhotoGallery;

