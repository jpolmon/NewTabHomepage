let button=document.querySelector("#jokeButton")
  
button.addEventListener("click", getJoke)

function getJoke(){

  fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?safe-mode&format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
      "x-rapidapi-key": "3c92b776ecmsh9653242e81dc867p11b153jsn8407c6570d0e"
    }
  }) .then((response) => {return response.json()})
      .then((data) => {renderJoke(data)
      console.log(data)
  });
}

  function renderJoke(data) {
    // Get text elements
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.textContent = data.setup
    punchline.textContent = data.delivery
  }