const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];

  
 document.getElementById('app').innerHTML = `<h1 class="app-title">I have <strong>${petsData.length}</strong> items</h1>
 ${petsData.map(function(pets){
     return `
     <div class="animal">
        <img class="pet-photo" src="${pets.photo}">
        <h2 class="pet-name">${pets.name} <span class="species">(${pets.species})</span></h2>
        <p class="species">${pets.species}</p>
     </div>`
 }).join('')}
 <p class="footer">Document have ${petsData.length} items</p>
 `;