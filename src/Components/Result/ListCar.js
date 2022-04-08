import React from "react";
import { Link } from 'react-router-dom'

import style from './result.module.css'

const ListCar = (props) => {
    return(
    <div className="card">
      <img src={props.car.image} className={style.image}/>
      <div className="card-body">
        <h6 className={style.title}>{`${props.car.name} / ${props.car.category}`}</h6>
        <h6 className={style.price}>{`Rp ${props.car.price}`} / hari</h6>
        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={style.description}><img src="/images/icon_users.png" className={style.icon}/> 4 Orang </div>
        <div className={style.description}><img src="/images/icon_setting.png" className={style.icon}/> Manual </div>
        <div className={style.description}><img src="/images/icon_calendar.png" className={style.icon}/> Tahun 2020 </div>
        <Link to={`car/${props.car.id}`}>
            <button className={style.button}>
              Pilih Mobil
            </button>
        </Link>
      </div>
    </div>
    )
}

export default ListCar