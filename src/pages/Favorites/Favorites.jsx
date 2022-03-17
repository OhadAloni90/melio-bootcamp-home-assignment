import "./Favorites.css";
import { Card } from '../../components/Card/Card'
import React, {useEffect, useState} from "react";
import { PERSISTENT_CANDIDATES_LOCALSTORAGE_KEY } from '../../utils/helper'


export const Favorites = () => {


  const getArray = JSON.parse(localStorage.getItem(PERSISTENT_CANDIDATES_LOCALSTORAGE_KEY) || '0')

  return (

    <div id="favorite">
      <div className="favorite-title">Favorite candidates</div>
      <div className="favorite-subtitle">Ohad Aloni</div>
      <div className="candidates-list">
        {getArray && Object.values(getArray).flat().map(candidate  => {

          if(candidate.isFavorite) {
            return <Card key={candidate.uuid} candidateData = {candidate} favoriteClickCallBack={()=>null} hiddenClickCallBack={()=>null}/>
          }
        })}
        
      </div>
    </div>
    

  );
};
