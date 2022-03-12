import React from "react";
import { render } from "react-dom";
import "./Card.css";

export const Card = (props) => {
  const candidates = props.candidatesData;
  const candidatesSpreadArray = [];
  const candidatesSpreadArrayLogic = Object.keys(candidates).map((key)=>{
    candidates[key].map(can => candidatesSpreadArray.push(can))})

  const handleFavoriteClick = () => {
  };

  
  // _renderObject () {
  //   return Object.entries(candidates).map(([key, value], i)=> {
  //     return (
  //       <div key={key}>
  //         name is : {value.firstName}
  //       </div>
  //     )
  //   })
  // }
   return (  
    candidatesSpreadArray.map(can=>{
      return (
            <div className="card">
      <div className="card_img">
        <img src={can.picture.large}/>
      </div>

      <div className="card_txt">
        <span className="name-span">
              <h3 className="card-title">
                  {can.firstName + ' ' + can.lastName}
              </h3>
                {can.isPreferred ? <p className="pref-txt"> Preferred </p> : null}
        </span>
        <div>
            <p>
              {can.email}
            </p>
            <p>
              {can.city + ', ' + can.country}
            </p>

        </div>
      </div>
    </div>

      )
    })
   )

}
