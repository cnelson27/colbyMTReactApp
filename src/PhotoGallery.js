import React from 'react';
import './PhotoGallery.css';

function importAll(r) {
  let imageArray = r.keys().map(r);
  return imageArray;
}

const miscImages = importAll(require.context('./images/Misc', false, /\.(png|jpe?g|svg)$/));
const backpackingImages = importAll(require.context('./images/Backpacking2017', false, /\.(png|jpe?g|svg)$/));


class PhotoGallery extends React.Component {
  render () {
    return (
      
      <div className="opaqueBg">
        <h1>Photo Gallery</h1>
        <hr />
        <h2>Miscellaneous Adventures</h2>
        <div className='row'>
        {miscImages.map((img, idx) => {
            return (
              <div className='col-md-3'>
              <img 
              key={idx}
              className='galleryImage'
              src={img} 
              alt="Miscellaneous Adventures {idx}"
            />
            </div>
            )
          })}
        </div>
        <hr />
        <h2>The Beaten Path - Alpine, MT - August 2017</h2>
        <div className='row'>
        {backpackingImages.map((img, idx) => {
            return (
              <div className='col-md-3'>
              <img 
              key={idx}
              className='galleryImage'
              src={img} 
              alt="Backpacking Trip 2017 {idx}"
            />
            </div>
            )
          })}
        </div>
    </div>
    );
  }
}

export default PhotoGallery;

