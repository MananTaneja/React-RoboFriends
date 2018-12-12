import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return(
        <div className = "tc bg-light-green grow shadow-5 dib br3 pa3 ma2 bw2 al">
            <img alt = "Robots" src = {`https://robohash.org//${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>  
    );
}

export default Card;