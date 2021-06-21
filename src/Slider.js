import React from 'react';
import './App.scss';

const images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/kenan-sulayman-FV3M7igu8Fs-unsplash.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/anastasia-dulgier-NCFTGtjY3EQ-unsplash.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/arnaud-mariat-IPXcUYHeErc-unsplash.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/matthew-smith-9CV6WrxxdrM-unsplash.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/vladimir-kondriianenko-bxwzcFy9YwM-unsplash.jpg"];
const Slider = (props) => {
    return (
        <div className="container">
          <ol className="viewport">
            {images.map((image, idx) => (
                <li id={`slide--${idx}`} className="slide">
                  <div className="image">
                    <img src={image} />
                  </div>
                </li>
            ))}
          </ol>
          <div>
            <ol className="navigation">
              {images.map((_, idx) => (
                  <li>
                    <a href={`#slide--${idx}`} />
                  </li>
              ))}
            </ol>
          </div>
        </div>
    );
};

export default Slider;
