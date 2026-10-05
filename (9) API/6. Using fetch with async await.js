// Our First API Request using fetch and async-await

// Define the API endpoint
const url = "https://catfact.ninja/fact";

// Async function to fetch cat facts
async function getCatFacts() {
  try {
    // First API request
    const res1 = await fetch(url);          // Send request to the API
    const data1 = await res1.json();        // Parse response into JSON
    console.log("Cat Fact1: ", data1.fact);  // Log the first cat fact

    // Second API request
    const res2 = await fetch(url);          // Send another request
    const data2 = await res2.json();        // Parse response again
    console.log("Cat Fact2: ", data2.fact);  // Log the second cat fact
  } catch (err) {
    // If any error occurs (like network issue), it will be caught here
    console.error("Error: ", err);
  }
}

// Call the function to run the API requests
getCatFacts();

// This line runs immediately (before API responses) 
// because JavaScript is asynchronous and doesn’t wait for fetch()
console.log("Learning API Calls!!");