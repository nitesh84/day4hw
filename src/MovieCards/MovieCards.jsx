import React from 'react'
import styles from './MovieCards.module.css'

export const MovieCards = ({movie}) => {
    const {id,title,description,genre,director,duration,rating,image,backgroundImage}=movie;
    const {top,topRight,movies,left,right,bottom}=styles
  return (
    <div className={movies}>
            <div className={left}>
                <div className={top}>
                    <img src={image} alt=""  />
                    <div className={topRight}>
                        <h2>{title}</h2>
                        <br />
                        <span>{rating} , {director}</span>
                        <br />
                        <span>{duration} min </span>
                        <span>{genre.join(",")}</span>
                    </div>
                </div>
                <div className={bottom}>
                    {description}
                </div>
            </div>
            <div className={right} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${backgroundImage})` }}>
            </div>
    </div>
  )
}
