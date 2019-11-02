import React from 'react';
import './PhotoGallery.css';

function importAll(r) {
  let imageArray = r.keys().map(r);
  return imageArray;
}

const miscImages = importAll(require.context('./images/Misc', false, /\.(png|jpe?g|svg)$/));
const backpackingImages = importAll(require.context('./images/Backpacking2017', false, /\.(png|jpe?g|svg)$/));
const AnnaImages = importAll(require.context('./images/Anna', false, /\.(png|jpe?g|svg)$/));


class PhotoGallery extends React.Component {
  render () {
    return (
      
      <div className="opaqueBg">
        <h1>Photo Gallery</h1>
        <hr />
        <h2>Adventures With My Wife, Anna</h2>
        <div className='row'>
        {AnnaImages.map((img, idx) => {
            return (
              <div className='col-sm-6 col-md-3'>
              <img 
              key={idx}
              className='galleryImage'
              src={img} 
              alt="Adventures with Anna" 
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
              <div className='col-sm-6 col-md-3'>
              <img 
              key={idx}
              className='galleryImage'
              src={img} 
              alt="Backpacking Trip 2017" 
            />
            </div>
            )
          })}
        </div>
        <hr />
        <h2>Miscellaneous Adventures</h2>
        <div className='row'>
        {miscImages.map((img, idx) => {
            return (
              <div className='col-sm-6 col-md-3'>
              <img 
              key={idx}
              className='galleryImage'
              src={img} 
              alt="Miscellaneous Adventures"
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

