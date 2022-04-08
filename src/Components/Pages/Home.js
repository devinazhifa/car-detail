import React, { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {

    const [carList, setCarList] = useState([])
    
      return (
        <>
            <Header />
            <SearchBar setCarList={setCarList} />
            <Result carList={carList} />
            <Footer />
        </>
      )
    }
    
export default Home