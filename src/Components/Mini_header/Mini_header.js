import React from 'react';

import style from './mini_header.module.css'

const Mini_header = () => {
  return (
    <div>
      <div className={style.navbar}>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
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
</div>

  );
}

export default Mini_header