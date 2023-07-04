import React from 'react';
import '../gallery/gallery.css';
import Nata1 from '../gallery/aset/1.jpg';
import Nata2 from '../gallery/aset/2.jpg';
import Nata3 from '../gallery/aset/3.jpg';
import Nata4 from '../gallery/aset/4.jpg';
import Nata5 from '../gallery/aset/5.jpg';
import Nata6 from '../gallery/aset/6.jpg';
import Nata7 from '../gallery/aset/7.jpg';
import Nata8 from '../gallery/aset/8.jpg';
import Nata9 from '../gallery/aset/9.jpg';

const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col mb-3">
            <h2>My Gallerry</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata1} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata2} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata3} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata4} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata5} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata6} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata7} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata8} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 justify-content-center">
              <div class="card" style={{ width: 18 + 'rem' }}>
                <img src={Nata9} class="card-img-top" alt="gambar1" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
