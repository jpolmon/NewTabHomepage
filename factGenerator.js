//Fact Generator JS
//API Key, endpoints and variables
let apiKey = "uEauUrGQXbeLmF563UiIKAeF"
let factUrl = `http://api.fungenerators.com/fact/random?&api_key=${apiKey}`
let dayUrl = `https://api.fungenerators.com/fact/onthisday/event?&api_key=${apiKey}`
var factContainer = document.getElementById("fact-generator")
var generateBtn = document.getElementById("generateButton")

//Both functions are called when the page loads
onThisDay();
generateFact();

//Function to generate random fact
function generateFact() {

fetch(factUrl, {cache:"no-store"})

        .then(function (response) {
            // console.log(response.ok)
            return response.json()
        })
        .then(function (data) {
            console.log(data)


			var factHeader = document.createElement("h2");
            var factCategory = document.createElement("h4")
            factHeader.classList.add("card", "bg-warning")
            factHeader.textContent = "Random Fun Fact"
            factCategory.textContent = "Category: " + data.contents.category + ", " + data.contents.subcategory
            factContainer.appendChild(factHeader);
            factHeader.appendChild(factCategory);

			var fact = document.createElement("h3");
            fact.classList.add("card", "bg-dark", "text-white");
            fact.textContent = data.contents.fact
            factContainer.appendChild(fact);
            

		})
	}

//Function to generate random historical on-this-day event
function onThisDay() {

    fetch(dayUrl, {cache:"no-store"})
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            var historicalFactHeading = document.createElement("h3");
            historicalFactHeading.classList.add("card", "bg-warning");
            historicalFactHeading.textContent = "On this day in " + data.contents.year + ":"
            factContainer.appendChild(historicalFactHeading)

            var historicalFact = document.createElement("h3")
            historicalFact.classList.add("card", "bg-dark", "text-white");
            historicalFact.textContent = data.contents.event
            factContainer.appendChild(historicalFact)
        })
}




