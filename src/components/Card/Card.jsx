import React, {useEffect, useState} from "react";

import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon/";
import "./Card.css";

export const Card = (props) => {
  const candidate = props.candidateData;

  const handleFavoriteClick = (candidate) => {
     props.favoriteClickCallBack(candidate)
  };

  const handleHiddenClick = (candidate) => {
    props.hiddenClickCallBack(candidate);
  }

  useEffect(()=>{
    handleFavoriteClick || 
    handleHiddenClick

  },[])

  const { firstName, lastName, picture, uuid, country, city, isFavorite, isPreferred, email } = candidate;

   return (  
      
       
      <div className="card" key={uuid} >
        <div className="card_img" >
          <img src={picture.large}/>
        </div>

        <div className="card_txt">
          <span className="name-span">
                <h3 className="card-title">
                    {firstName + ' ' + lastName}
                </h3>
                  {isPreferred ? <p className="pref-txt"> Preferred </p> : null}
                  <button onClick={() => handleHiddenClick(candidate)} className="card-hide-btn">Delete</button>

          </span>
          
        <div>
            <p>
              {email}
            </p>
            <p>
              {city + ', ' + country}
            </p>

        </div>
      </div>
        <div className= {`icon-div ${isFavorite ? 'active' : ''}`} onClick={() => handleFavoriteClick(candidate)}>
          <FavoriteIcon/>
        </div>
    </div>

      )
  

}
