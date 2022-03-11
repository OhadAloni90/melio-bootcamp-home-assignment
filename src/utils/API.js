
// Hint: you can copy the URL to a browser and see the result


const FETCH_CANDIDATES_URL =
  "https://randomuser.me/api/?seed=abcd&nat=us,dk,fr,gb&results=50&page=1";

export const fetchCandidates = async () => {

  // Add your implementation of candidates data fetching here, use the URL provided above
  try {
    const res = await fetch(FETCH_CANDIDATES_URL)
    if(!res.ok) {
      throw new Error(`Error:${res.status}`);
    }

    const jsonData = await res.json();
    return jsonData;
    
  } catch (error) {
    console.log(`Fetching data failed. Error is: ${error}`);
  }

}
