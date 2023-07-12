// Fetching API through async and await
const URL = "https://jsonplaceholder.typicode.com/todos";

async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

