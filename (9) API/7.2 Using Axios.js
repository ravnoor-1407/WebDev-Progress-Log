// Using Axios for HTTP requests

// Axios is a popular JavaScript library used for making HTTP requests, especially in web development.
// Think of it as a more powerful and convenient alternative to fetch().

// Why Axios??
// Axios is generally preferred over fetch() for larger or complex projects because: 
// It has built‑in features like automatic JSON parsing, better error handling, request cancellation, and interceptors

// Cat Fact URL
let url1 = "https://catfact.ninja/fact";
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async () => {
  let fact = await getFacts();
  let p = document.querySelector("#facts");
  p.innerText = fact;
});

async function getFacts() {
  try {
    const res1 = await axios.get(url1);
    console.log("Cat Fact1:", res1.data.fact);
    return res1.data.fact;
  } catch (err) {
    console.error("Error:", err);
    return "No facts found!!";
  }
}

// Dog Image URL
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let imgLink = await getImage();
  let img = document.querySelector("#images");
  img.setAttribute("src", imgLink);
});

async function getImage() {
  try {
    const res1 = await axios.get(url2);
    console.log("Dog Image:", res1.data.message);
    return res1.data.message;
  } catch (err) {
    console.error("Error:", err);
    return "";
  }
}