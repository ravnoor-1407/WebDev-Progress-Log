// Country wise University Search

// Define the API endpoint
let url1 = "http://universities.hipolabs.com/search?country=";

// Select the "Search" button for country input
let btn1 = document.querySelector("#countryBtn");

// Add click event listener to the button
btn1.addEventListener("click", async () => {
  // Get the value entered in the country input box
  let country = document.querySelector("#countryInput").value;
  console.log("Country search:", country);

  // Call async function to fetch universities of that country
  let collegesArr = await getColleges(country);

  // Display the results on the webpage
  showCountry(collegesArr);
});

// Async function to fetch data from API
async function getColleges(country) {
  try {
    // Send GET request to API with country name
    let res = await axios.get(url1 + country);

    // Return the JSON data (array of universities)
    return res.data;
  } catch (err) {
    // If any error occurs (like wrong input or network issue)
    console.log("Error:", err);
    return [];
  }
}

// Function to display country-wise universities in <ul>
function showCountry(collegesArr) {
  let list1 = document.querySelector("#list1");
  list1.innerHTML = ""; // Clear old results

  // Loop through each university and create <li> element
  for (let college of collegesArr) {
    let li1 = document.createElement("li");
    li1.innerText = college.name; // Show only name
    list1.appendChild(li1);
  }
}

// Indian State wise University Search

// Define API endpoint (fixed country = India, filter by name)
let url2 = "http://universities.hipolabs.com/search?country=India&name=";

// Select the "Search" button for state input
let btn2 = document.querySelector("#stateBtn");

// Add click event listener to the button
btn2.addEventListener("click", async () => {
  // Get the value entered in the state input box
  let state = document.querySelector("#stateInput").value.trim();
  console.log("State search:", state);

  // Send GET request to API with state name
  let res = await axios.get(url2 + state);

  // Display the results on the webpage
  showState(res.data);
});

// Function to display state-wise universities in <ul>
function showState(stateCollegesArr) {
  let list2 = document.querySelector("#list2");
  list2.innerHTML = ""; // Clear old results

  // If no colleges found, show message
  if (stateCollegesArr.length === 0) {
    list2.innerHTML = `<li>No colleges found</li>`;
    return;
  }

  // Loop through each university and create <li> element
  for (let college of stateCollegesArr) {
    let li2 = document.createElement("li");
    // Show name
    li2.innerText = college.name;
    list2.appendChild(li2);
  }
}