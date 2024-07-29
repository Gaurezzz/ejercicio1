"use client"
import React, { useEffect, useState } from 'react'
import Movie from './MovieList'
import styles from "../app/page.module.css"
import moviesData from './movies.json'

const Form = () => {

    const[movie, setMovie] = useState(null)
    const [movieList, setMovieList] = useState([{movie:["Toy Story", 1]},{movie:["Jurassic Park", 8]}])
    const [total, setTotal] = useState(9)

    const [movieSelect, setMovieSelect] = useState([])

    useEffect(() => {
        setMovieSelect(moviesData)
    }, []);

    const handleChange = e => { 
        const [name, price] = e.target.value.split(',');
        setMovie({[e.target.name]:[name, parseFloat(price)]})
    }

    const handleClick = e => {

        if (Object.keys(movieList).length===0 || movie === null){

            alert('el campo no puede estar vacio')
            return
        }
        setMovieList([...movieList, movie])
    }

    const actualizarTotal = (cantidad) => {

        setTotal(total+cantidad)
    }

    const deleteMovieItem = indice => {

        const newMovieList = [...movieList]
        newMovieList.splice(indice, 1)
        setMovieList(newMovieList)
    }

    return (
        <>
            <form onSubmit={e=>e.preventDefault()}>
                <label className={styles.form_label}>Agregar pelicula</label>
                <select className={styles.form_input} type='text' name='movie' onChange={handleChange}>
                <option value="" disabled selected>Selecciona una opción</option>
    
                    {
                    movieSelect.map((value, index)=>(
                        <option value={value.movie[0] + ',' + value.movie[1]}>{value.movie[0]} - ${value.movie[1]}</option>
                    ))
                }
                </select>
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
            {
                movieList.map((value, index)=>(
                    <Movie movieItem ={value.movie[0]} precio={value.movie[1]} key={index} index={index} deleteMovieItem={deleteMovieItem} actualizarTotal={actualizarTotal}/>
                ))
            }
            <br></br>
            <div className={styles.divTotal}><h3>Total: {total}</h3></div>
        </>
    )
}

export default Form