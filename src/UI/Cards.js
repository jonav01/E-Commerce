import React from 'react'
import './Card.css'
function Cards({image,name,btnHandler}) {
    return (
        <div className="card">
            <img src={image} alt="card-img" className="card__Img"/>
            <div className="card__Text">
                <span>{name}</span>
            </div>
            <button className="card__Btn" onClick={btnHandler}>Explore More</button>
        </div>
    )
}

export default Cards
