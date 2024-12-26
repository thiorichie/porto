import React from 'react'
import Banner from '../assets/KA_BG.jpg'
import {useNavigate} from 'react-router-dom'

function Carousel() {
    const navigate = useNavigate();

  return (
    <div style={{marginTop: '90px'}}>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" style={{marginTop: '15px', display: 'flex'}}>
            <div class="carousel-item active" style={{justifyItems: 'center', borderRadius: '5px'}} onClick={() => navigate('')}>
            <img src={Banner} class="d-block" style={{width: '80%', height: '350px', borderRadius: '5px'}} alt="..."/>
            </div>
            <div class="carousel-item" style={{justifyItems: 'center', borderRadius: '5px'}} onClick={() => navigate('')}>
            <img src={Banner} class="d-block" style={{width: '80%', height: '350px', borderRadius: '5px'}} alt="..."/>
            </div>
            <div class="carousel-item" style={{justifyItems: 'center', borderRadius: '5px'}} onClick={() => navigate('')}>
            <img src={Banner} class="d-block" style={{width: '80%', height: '350px', borderRadius: '5px'}} alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carousel
