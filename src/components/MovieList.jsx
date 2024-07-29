"use client"
import React, { useState } from 'react'
import style from '@/app/page.module.css'

const Movie = ({movieItem, index, deleteMovieItem, precio, actualizarTotal}) => {
    
    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        if (counter===15){
            alert('el maximo de boletos es 15');
            return;
        }
        actualizarTotal(precio)
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter===1){
            alert('el minimo de boletos es 1');
            return;
        }
        actualizarTotal(-1*precio)
        setCounter(counter - 1);
    };

    return (
        <>
            <div className={style.list}>
                <div className={style.container}>
                    <div className={style.text}>
                        <h3>{movieItem}</h3>
                        <p>${precio}</p>
                    </div>
                    <div className={style.pagination}>
                        <button class={style.arrow} onClick={decrementCounter}>&lt;</button>
                        <span class={style.number}>{counter}</span>
                        <button class={style.arrow} onClick={incrementCounter}>&gt;</button>
                        <button className={style.btn_delete} onClick={()=>deleteMovieItem()}>×</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie