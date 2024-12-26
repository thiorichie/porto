import React from 'react';
import Banner from '../assets/KA_BG.jpg';
import { useNavigate } from 'react-router-dom';

function Carousel() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '90px' }}>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ marginTop: '15px', display: 'flex' }}>
          <div
            className="carousel-item active"
            style={{ justifyItems: 'center', borderRadius: '5px' }}
            onClick={() => navigate('')}
          >
            <div
              className="container"
              style={{
                backgroundColor: 'aliceblue',
                height: '40vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '0',
                borderRadius: '5px',
              }}
            >
              <div
                className="bannerImage"
                style={{
                  backgroundColor: '#007bff',
                  height: '100%',
                  width: '70%',
                  borderRadius: '5px',
                }}
              ></div>
              <div
                className="bannerDesc"
                style={{
                  backgroundColor: '',
                  height: '100%',
                  width: '30%',
                  borderRadius: '5px',
                }}
              ></div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ justifyItems: 'center', borderRadius: '5px' }}
            onClick={() => navigate('')}
          >
            <div
              className="container"
              style={{
                backgroundColor: '#007bff',
                height: '40vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '0',
                borderRadius: '5px',
              }}
            >
              <div
                className="bannerImage"
                style={{
                  backgroundColor: '007bff',
                  height: '100%',
                  width: '70%',
                  borderRadius: '5px',
                }}
              ></div>
              <div
                className="bannerDesc"
                style={{
                  backgroundColor: 'aliceblue',
                  height: '100%',
                  width: '30%',
                  borderRadius: '5px',
                }}
              ></div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ justifyItems: 'center', borderRadius: '5px' }}
            onClick={() => navigate('')}
          >
            <div
              className="container"
              style={{
                backgroundColor: 'aliceblue',
                height: '40vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '0',
                borderRadius: '5px',
              }}
            >
              <div
                className="bannerImage"
                style={{
                  backgroundColor: '#007bff',
                  height: '100%',
                  width: '70%',
                  borderRadius: '5px',
                }}
              ></div>
              <div
                className="bannerDesc"
                style={{
                  backgroundColor: 'alieblue',
                  height: '100%',
                  width: '30%',
                  borderRadius: '5px',
                }}
              ></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
