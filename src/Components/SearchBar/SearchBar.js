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
                <div className={style.search_group}>
                    <label for="tipe_driver">Tipe Driver</label>
                    <select name="tipe_driver" id="tipe_driver">
                        <option value="">Pilih Tipe Driver</option>
                        <option value="">Dengan Sopir</option>
                        <option value="">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className={style.search_group}>
                    <label for="tanggal">Tanggal</label>
                    <input type="date" name="tanggal" id="tanggal" />
                </div>
                <div className={style.search_group}>
                    <label for="waktu">Waktu Jemput/Ambil</label>
                    <select name="waktu" id="waktu">
                        <option value="">Pilih Waktu</option>
                        <option value="">08.00 WIB</option>
                        <option value="">09.00 WIB</option>
                        <option value="">10.00 WIB</option>
                        <option value="">11.00 WIB</option>
                        <option value="">12.00 WIB</option>
                    </select>
                </div>
                <div className={style.search_group}>
                    <label for="penumpang">Jumlah Penumpang (Optional)</label>
                    <select name="penumpang" id="penumpang">
                        <option value="">Jumlah Penumpang</option>
                        <option value="">3</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>
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