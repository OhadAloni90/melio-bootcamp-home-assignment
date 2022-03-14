import React, {useEffect, useState} from "react";
import "./Home.css";
import {fetchCandidates} from "../../utils/API.js";
import {getPersistentCandidatesData, setPersistentCandidatesData, transformCandidatesAlphabetically, transformCandidatesData} from "../../utils/helper.js";
import {FavoriteIcon} from "../../components/FavoriteIcon/FavoriteIcon";
import { Card } from '../../components/Card/Card'

/*
  This is a "React component", you don't really need to know react in dept,
*/
export const Home = () => {

  // once you populated candidates variable with data
  // search online how to "render an array of items in react" and add your implementation below (line 41)
  // to update the candidates variable, you need to use setCandidatesFunction
  // Note - every time you use this function, it will auto refresh your Home page, we call it in React - "Render".
  const [candidates, setCandidatesFunction] = useState([]);
  
  // this is "React Hook", a function that will be called ONCE, on every page load
  useEffect(() => {
    runOnHomePageLoad();
  }, []);

  const candidatesSpreadArray = [];

  
  const runOnHomePageLoad = async () => {
    // once you will succeed getting the data, make it persistent as required.
    // if the data is already fetched and persistent - don't fetch it again, use the condition below
    const data =  await getPersistentCandidatesData();

    if (data) {
      // const jsonData = setPersistentCandidatesData(data)
      // const transfData = transformCandidatesData(jsonData);
      // const candidatesSpreadArrayLogic = Object.keys(transfData).map((key)=>{
      //   transfData[key].map(can => candidatesSpreadArray.push(can))})
      // setCandidatesFunction(candidatesSpreadArray); 
        setCandidatesFunction(data);
    } else {

      // replace the empty array once you implemented the fetching code with: await fetchCandidates()
      const fetchedData = await fetchCandidates();

      // replace the empty array once the data is transformed
      const transformedData = transformCandidatesData(fetchedData.results);
      
      setPersistentCandidatesData(transformedData);

      //this function will save a "React State" and allow you to use the data via candidates variable outside.
      setCandidatesFunction(transformedData);
    }
  }

  const handleLike = (likedCandidate) => {
    const updatedCandidates = Object.values(candidates).flat().map(candidate => 
      likedCandidate.uuid === candidate.uuid ? {...likedCandidate, isFavorite: !candidate.isFavorite} : candidate
    );
    const transformedUpdatesCandidates = transformCandidatesAlphabetically(updatedCandidates);

    setPersistentCandidatesData(transformedUpdatesCandidates);
    
    setCandidatesFunction(transformedUpdatesCandidates);
  }

  return (
    <div id="home">
      <div className="home-title">Firm's candidates</div>
      <div className="home-subtitle">Ohad Aloni</div>
      <div className="candidates-list">
        {candidates && Object.values(candidates).flat().map(candidate  => {
          return <Card key={candidate.uuid} candidateData = {candidate} favoriteClickCallBack={handleLike}/>
        })}
        
      </div>
    </div>
  );
};
