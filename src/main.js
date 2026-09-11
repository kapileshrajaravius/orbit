import './style.css'

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

const today = new Date();
today.setDate(today.getDate() - 1);
const dateStr = today.toISOString().split('T')[0];

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const timeStr = now.toLocaleTimeString();

  let greeting;
  if (hours < 12) greeting = "Good morning";
  else if (hours < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  document.querySelector("#clock").innerHTML = `
    <p>${greeting}</p>
    <p>${timeStr}</p>
  `;
}

setInterval(updateClock, 1000);
updateClock();

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateStr}`)
  .then(response => response.json())
  .then(data => {
    let media;

    if (data.media_type === "image") {
      media = `<img src="${data.url}"/>`;
    } else {
      media = `<video src="${data.url}" controls></video>`;
    }

    document.querySelector("#app").innerHTML = `
      <h1>${data.title}</h1>
      ${media}
      <p>${data.explanation}</p>
    `;
  })
  .catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
  });