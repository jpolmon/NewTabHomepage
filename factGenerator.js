let apiKey = "uEauUrGQXbeLmF563UiIKAeF"
let factUrl = "https://api.fungenerators.com/fact/random?&api_key=uEauUrGQXbeLmF563UiIKAeF"

function generateFact() {


var factContainer = document.getElementById("fact-generator")

fetch(factUrl)

        .then(function (response) {
            console.log(response.ok)
            return response.json()
        })
        .then(function (data) {
            console.log(data)

			var factCategory = document.createElement("h3");
            factCategory.textContent = "Category: " + data.contents.category + ", " + data.contents.subcategory
            factContainer.appendChild(factCategory);

			var fact = document.createElement("h3");
            fact.textContent = data.contents.fact
            factContainer.appendChild(fact);
            

		})
	}




generateFact();

