import React from 'react';

import style from './result.module.css';
import ListCar from './ListCar';

const Result = (props) => {
  return (
    <div>
      <div className="container">
      <section className={style.card}>
        {props.carList.length > 0 && props.carList.map((car, index) => {
          return(
            <ListCar car={car} key={index} />
          )
        })}
      </section>
      </div>
    </div>
  );
}

export default Result