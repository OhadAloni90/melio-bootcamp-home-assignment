
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
                                          isFavorite: false, isHidden: false}));
  // Add your implementation of transforming the fetched candidates data
  return transformCandidatesAlphabetically(result);

};  

// You can add more logic here if you need to :)
// - I do!

export const transformCandidatesAlphabetically = (result) => {

    let data = result.reduce((alphabetArray,candidate)=> {
      let groupTitle = candidate.firstName[0].toUpperCase();
      if(!alphabetArray[groupTitle]) {
        alphabetArray[groupTitle] = [candidate];
      }
      else {
        alphabetArray[groupTitle].push(candidate);
      }
      return alphabetArray;
    }, {})
    return data;
}

