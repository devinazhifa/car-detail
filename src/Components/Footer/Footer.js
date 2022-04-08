import React from 'react'

import style from './footer.module.css'

const Footer = () => {
  return (
    <div className="container">
        <footer className="row">
            <div className={`col-3 ${style.footer}`}>
                <p>Jalan Suroyo No. 161 Mayangan, Kota Probolinggo, 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-335-420-220</p>
            </div>
            <div className={`col-2 ${style.footer}`}>
                <p>Our Services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className={`col-4 ${style.footer}`}>
                <p>Connect with us</p>
                <img src='/images/sosmed.png'/>
            </div>
            <div className={`col-3 ${style.footer}`}>
                <p>Copyright Binar 2022</p>
                <img src='/images/logo.png'/>
            </div>
        </footer>
    </div>
  )
}

export default Footer