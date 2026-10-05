// Our First API Request using fetch()

const url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    console.log("Raw Response:", response); // shows the Response object (Promise is returned)
    return response.json();                 // parse JSON
  })
  .then((data1) => {
    console.log("Cat Fact1:", data1.fact);  // access the fact
    return fetch(url);                      // fetch again for another fact
  })
  .then((response) => {
    return response.json();                 // parse JSON again
  })
  .then((data2) => {
    console.log("Cat Fact2:", data2.fact);  // second fact
  })
  .catch((err) => {
    console.error("Error:", err); 
  });

// API Calls work asyncronously as JS doesn't wait for it to execute further code.
console.log("Learning API Calls!!");