let apiKey = "uEauUrGQXbeLmF563UiIKAeF"
let factUrl = "https://api.fungenerators.com/fact/random?&api_key=uEauUrGQXbeLmF563UiIKAeF"

function generateFact() {

// 	fetch(factUrl, {
// 		method: "GET",
// 		body: JSON.stringify(),
// 		headers: {
// 			"accept": "application/JSON",
// 			"X-Fungenerators-Api-Secret": apiKey,
// 		},
// 		credentials: "same-origin"
// 	}).then(function(response) {
// 		response.status
// 		response.statusText
// 		response.headers
// 		response.url

// 		return response.text()
// 	}, function(error) {
// 		error.message
// 	})
// }
var factContainer = document.getElementById("fact-generator")

fetch(factUrl)

        .then(function (response) {
            console.log(response.ok)
            return response.json()
        })
        .then(function (data) {
            console.log(data)

			var fact = document.createElement("h3");
            fact.textContent = data.contents.fact
            factContainer.appendChild(fact);
            

		})
	}




generateFact();

