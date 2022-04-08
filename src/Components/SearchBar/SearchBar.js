import React from 'react';
import { set, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import style from './searchbar.module.css'

const SearchBar = (props) => {
    const { handleSubmit } = useForm()
    const onSubmit = (formData) =>{
        fetch('https://rent-cars-api.herokuapp.com/admin/car')
        .then(response => {
            return response.json()
        })
        .then( data => {
            props.setCarList([...data])
        })
    }
  return (
    <div>
        <form id="search-movie" onSubmit={handleSubmit(onSubmit)}>
            <div className={style.search_container}>
                <div className={style.dropdown}>
                    <h6 className={style.subtitle}>Tipe Driver</h6>
                    <div className={style.dropbtn}>Pilih Tipe Driver <img className={style.icon} src="/images/chevron-down.png"/> </div>
                    <div className={style.dropdown_content}>
                        <div className={style.dropdown_item}>Dengan Sopir</div>
                        <div className={style.dropdown_item}>Tanpa Sopir (Lepas Kunci)</div>
                    </div>
                </div>
                <div className={style.dropdown}>
                    <h6 className={style.subtitle}>Tanggal</h6>
                    <input type="date" name="tanggal" id="tanggal" className={style.dropbtn}/> 
                </div>
                <div className={style.dropdown}>
                    <h6 className={style.subtitle}>Waktu Jemput/Ambil</h6>
                    <div className={style.dropbtn}>Pilih Waktu <img className={style.icon} src="/images/chevron-down.png"/> </div>
                    <div className={style.dropdown_content}>
                        <div className={style.dropdown_item}>08.00   WIB</div>
                        <div className={style.dropdown_item}>09.00   WIB</div>
                        <div className={style.dropdown_item}>10.00   WIB</div>
                        <div className={style.dropdown_item}>11.00   WIB</div>
                        <div className={style.dropdown_item}>12.00   WIB</div>
                    </div>
                </div>
                <div className={style.dropdown}>
                    <h6 className={style.subtitle}>Jumlah Penumpang (Optional)</h6>
                    <div className={style.dropbtn}>Jumlah Penumpang <img className={style.icon} src="/images/chevron-down.png"/> </div>
                    <div className={style.dropdown_content}>
                        <div className={style.dropdown_item}>3</div>
                        <div className={style.dropdown_item}>5</div>
                        <div className={style.dropdown_item}>7</div>
                    </div>
                </div>
                <div className={style.submit}>
                    <button type="submit">Search</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default SearchBar