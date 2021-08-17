let apiKey = "uEauUrGQXbeLmF563UiIKAeF"
let factUrl = `http://api.fungenerators.com/fact/random?&api_key=${apiKey}`
var factContainer = document.getElementById("fact-generator")
var generateBtn = document.getElementById("generateButton")

generateFact();

function generateFact() {



fetch(factUrl, {cache:"no-store"})


        .then(function (response) {
            // console.log(response.ok)
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






