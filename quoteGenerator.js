let button=document.getElementById("button")
  
button.addEventListener("click", getJoke)

function getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {return response.json()})
      .then((data) => {renderJoke(data)
      console.log(data)
  });
}

  function renderJoke(data) {
    // Get text elements
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.textContent = data.setup
    punchline.textContent = data.punchline
  }