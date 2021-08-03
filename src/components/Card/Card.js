import React from 'react';
import style from './Card.module.scss';

function Card(props) {
  // const onClickButton = () => {
  //   alert(props.title);
  // };

  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={style.button} onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default Card;