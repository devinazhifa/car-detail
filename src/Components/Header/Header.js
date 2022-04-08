import React from 'react';

import style from './header.module.css'

const Header = () => {
  return (
    <div>
      <div className={style.navbar}>
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.png"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto"> 
            <a class="nav-link active" href="#">Our Services<span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#">Why Us</a>
            <a class="nav-link" href="#">Testimonial</a>
            <a class="nav-link" href="#">FAQ</a>
            <button type="button" class="btn btn-success">Register</button>
          </div>
        </div>
      </div>
    </nav>
    </div>

    <div className={style.hero}>
      <div className='container'>
      <div class="row align-items-center">
        <div class="col-12 col-lg-6">
          <div className={style.hero_title}>
            Sewa Rental Mobil Terbaik di kawasan Probolinggo
          </div>
          <div className={style.hero_subtitle}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik 
              dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </div>
              <button type="button" class="btn btn-success">Mulai Sewa Mobil</button>
        </div>
        <div class="col-12 col-lg-6">
            <img src="/images/img_car.png" alt="" class={style.hero_image}/>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Header