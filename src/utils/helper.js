import { fetchCandidates } from "./API";

export const PERSISTENT_CANDIDATES_LOCALSTORAGE_KEY = 'candidates';

export const getPersistentCandidatesData =  () => {
  // Add your implementation of getting your saved candidates data
  return JSON.parse(window.localStorage.getItem(PERSISTENT_CANDIDATES_LOCALSTORAGE_KEY));

}

export const setPersistentCandidatesData = (data) => {
  window.localStorage.setItem(PERSISTENT_CANDIDATES_LOCALSTORAGE_KEY, JSON.stringify(data));
}

export const transformCandidatesData = (data) => {
  const englishSpeakingCountries = ['United States', 'United Kingdom', 'Canada', 'New Zealand', 'Australia']
  // Add your implementation of saving the candidates data
  const result = data.map(candidate => ({firstName: candidate.name.first, lastName: candidate.name.last, 
                                        email: candidate.email, city: candidate.location.city, country: candidate.location.country,
                                        picture: candidate.picture, uuid: candidate.login.uuid,
                                         isPreferred: englishSpeakingCountries.includes(candidate.location.country) ? true : false, 
                                          isFavorite: false}));
  // Add your implementation of transforming the fetched candidates data
  return transformCandidatesAlphabetically(result);

};  

// You can add more logic here if you need to :)
// - I do!

export const transformCandidatesAlphabetically = (result) => {
    let sortedObj = {};
    for(let i=0; i < result.length; i++) {
      let alphabetLetter = result[i].firstName[0].toUpperCase();
      if (sortedObj[alphabetLetter] && sortedObj[alphabetLetter].length >= 0 ) {
        sortedObj[alphabetLetter].push(result[i])
      }
      else {
        sortedObj[alphabetLetter] = [];
        sortedObj[alphabetLetter].push(result[i])
      }
    }
    return sortedObj;

}

