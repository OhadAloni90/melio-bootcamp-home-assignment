import { fetchCandidates } from "./API";


export const getPersistentCandidatesData = async () => {
  // Add your implementation of getting your saved candidates data
  const recievedData = await fetchCandidates();
  const dataReducedToResult = recievedData.results;
  return dataReducedToResult;
}

export const setPersistentCandidatesData = (data) => {
  const englishSpeakingCountries = ['United States', 'United Kingdom', 'Canada', 'New Zealand', 'Australia']
  // Add your implementation of saving the candidates data
  const result = data.map(candidate => ({firstName: candidate.name.first, lastName: candidate.name.last, 
                                        email: candidate.email, city: candidate.location.city, country: candidate.location.country,
                                        picture: candidate.picture, uuid: candidate.login.uuid,
                                         isPreferred: englishSpeakingCountries.includes(candidate.location.country) ? true : false, 
                                          isFavorite: false}));
  
  // result.sort((a,b)=> {
  //   return a.firstName[0].localeCompare(b.firstName[0]);
  // });
  return result;
}

export const transformCandidatesData = (data) => {
  // Add your implementation of transforming the fetched candidates data
  let sortedObj = {};
  for(let i=0; i < data.length; i++) {
    let alphabetLetter = data[i].firstName[0].toUpperCase();
    if (sortedObj[alphabetLetter] && sortedObj[alphabetLetter].length >= 0 ) {
      sortedObj[alphabetLetter].push(data[i])
    }
    else {
      sortedObj[alphabetLetter] = [];
      sortedObj[alphabetLetter].push(data[i])
    }
  }
  console.log(sortedObj)
  return sortedObj;
};


// You can add more logic here if you need to :)
