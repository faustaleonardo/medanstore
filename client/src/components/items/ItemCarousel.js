import React from 'react';

const ItemCarousel = () => {
  return (
    <div
      id="carouselPhone"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="10000">
          <img
            src="https://images.mobileshop.eu/1554287985/product-large/samsung-galaxy-s10-plus-dual-sim-1tb-12gb-ram-sm-g975f-ds-ceramic-black.jpg"
            className="d-block w-100 phone-img"
            alt="samsung s10 plus"
          />
        </div>
        <div className="carousel-item" data-interval="10000">
          <img
            src="https://images.mobileshop.eu/1554287947/product-large/samsung-galaxy-s10-plus-dual-sim-1tb-12gb-ram-sm-g975f-ds-ceramic-black-2.jpg"
            className="d-block w-100 phone-img"
            alt="samsung s10 plus"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselPhone"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselPhone"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ItemCarousel;
