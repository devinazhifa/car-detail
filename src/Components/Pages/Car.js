import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Mini_header from '../Mini_header/Mini_header'
import Footer from '../Footer/Footer'
import axios from 'axios'

import style from './car.module.css'

const Car = () => {
    const [car, setCar] = useState({})
    const params = useParams()

    useEffect(() =>{
      axios.get(`https://625d73e74c36c753577540cb.mockapi.io/fejs2/api/c5-cars/${params.id}`)
      .then( response => {
        if ( response.data !== null ){
          setCar({...response.data})
        } else {
          return Promise.reject({ errorMessage: 'Product not available'})
        }
      })
      .catch( error => {
        setCar({...error})
      })
    }, [])

    // const param = useParams()
    // const [car,setCar] = useState(null)

    // useEffect(() => {
    //     fetch(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         setCar({...data})
    //     })
    // },[])

    return (
        <div>
        <Mini_header/>
        { car !== null && 
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className={style.detail}>
                <h6 className={style.title}>Tentang Paket</h6>
                <div className={style.text}>
                    <h6 className={style.subtitle}>Include</h6>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </div>
                <div className={style.text}>
                    <h6 className={style.subtitle}>Exclude</h6>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termausk akomodasi penginapan</li>
                </div>
                <h6 className={style.title}>Refund, Reschedule, Overtime</h6>
                <div className={style.text}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termausk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termausk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termausk akomodasi penginapan</li>
                </div>
              </div>
              <button className={style.button} type="button">Lanjutkan Pembayaran</button>
            </div>
            <div className="col-5">
                <div className={style.detail_car}>
                    <img src={car.image} className={style.picture}/>
                    <h6 className={style.title}>{`${car.name}`}</h6>
                    <div className={style.description}>
                      <img src="/images/icon_users.png" className={style.icon}/>4 Orang 
                      <img src="/images/icon_setting.png" className={style.icon}/> Manual
                      <img src="/images/icon_calendar.png" className={style.icon}/> Tahun 2020
                    </div>
                    <h6 className={style.total}>Total</h6>
                    <h6 className={style.price}>{`Rp ${car.price}`}</h6>
                    <button className={style.button_car} type="button">Lanjutkan Pembayaran</button>
                </div>
            </div>
          </div>
      </div>
    }
    <Footer />
    </div>
    )
}

export default Car
