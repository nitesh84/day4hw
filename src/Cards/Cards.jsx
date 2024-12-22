import React from 'react'
import styles from './Cards.module.css'
const Cards = ( {data}) => {

    const {name,hex}=data;



    const {cards,top,bottom} =styles;
    // console.log("here",name,hex);
    
  return (
    <>
        <div className={cards} >
            <div className={top} style={{backgroundColor: hex}}>
            </div>
            <div className={bottom}>
                <h1>{hex}</h1>
                <p>{name}</p>
            </div>
        </div>
    </>
  )
}

export default Cards