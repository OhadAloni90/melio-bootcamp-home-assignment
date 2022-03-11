import { fetchCandidates } from "./API";


export const getPersistentCandidatesData = async () => {
  // Add your implementation of getting your saved candidates data
  const recievedData = await fetchCandidates();
  const dataReducedToResult = recievedData.results;
  return dataReducedToResult;
}

export const setPersistentCandidatesData = (data) => {
  // Add your implementation of saving the candidates data
  const result = data.map(candidate => ({firstName: candidate.name.first, lastName: candidate.name.last, 
                                        email: candidate.email, city: candidate.location.city, country: candidate.location.country,
                                        picutre: candidate.picture, uuid: candidate.login.uuid,
                                         isFavorite: candidate.location.country === 'United States' || candidate.location.country === 'United Kingdom' ||
                                          candidate.location.country === 'Australia' || candidate.location.country === 'Canada' ? true : false, 
                                         isPreferred: false}));
  
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
  return sortedObj;
};


// You can add more logic here if you need to :)
