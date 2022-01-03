const $animalForm = document.querySelector("#animal-form");

const handleAnimalFormSubmit = (event) => {
  event.preventDefault();

  // get animal data and organize it
  const name = $animalForm.querySelector('[name="animal-name"]').value;
  const species = $animalForm.querySelector('[name="species"]').value;
  const dietRadioHTML = $animalForm.querySelectorAll('[name="diet"]');
  let diet;

  for (let i = 0; i < dietRadioHTML.length; i += 1) {
    if (dietRadioHTML[i].checked) {
      diet = dietRadioHTML[i].value;
    }
  }

  if (diet === undefined) {
    diet = "";
  }

  const selectedTraits = $animalForm.querySelector(
    '[name="personality"'
  ).selectedOptions;
  const personalityTraits = [];
  for (let i = 0; i < selectedTraits.length; i += 1) {
    personalityTraits.push(selectedTraits[i].value);
  }
  const animalObject = { name, species, diet, personalityTraits };

  fetch("/api/animals", {
    //collects all data into an object and uses fetch()to POST our data to the server
    //need to specify what type of request it is and set method to post
    method: "POST",
    //tell the request what kind of data we're looking to send and then actually provide the data
    //headers property informs this is going to be JSON
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    //we can stringify JSON data for our animalObject to the body
    body: JSON.stringify(animalObject),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Error: " + response.statusText);
    })
    .then((postResponse) => {
      console.log(postResponse);
      alert("Thank you for adding an animal!");
    });
};

$animalForm.addEventListener("submit", handleAnimalFormSubmit);
