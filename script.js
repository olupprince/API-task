const containerList = document.getElementById('container-list')

// Fetch Star Wars character data from the API
fetch('https://swapi.dev/api/people/')

.then(response => response.json())
.then(data => {

// Iterate over the data and create a list item for each character
for (const container of data.results) {
const li = document.createElement('li');

let containerImage;
if (container.name === "Luke Skywalker") {
containerImage = "Imagem-Luke-Skywalker.png";
} else if (container.name === "C-3PO") {
containerImage = "Imagram-C-3PO.png";
} else if (container.name === "R2-D2") {
containerImage = "Imagem-R2-D2.png";
} else if (container.name === "Darth Vader") {
containerImage = "Imagem-Darth-Vader.png";
} else if (container.name === "Owen Lars") {
containerImage = "Imagem-Owen-Lars.png";
} else if (container.name === "Beru Whitesun lars") {
containerImage = "Imagem-Beru-Whitesun-lars.png";
} else if (container.name === "R5-D4") {
containerImage = "Imagem-R5-D4.png";
} else if (container.name === "Biggs Darklighter") {
containerImage = "Imagem-Biggs-Darklighter.png";
} else if (container.name === "Obi-Wan Kenobi") {
containerImage = "Imagem-Obi-Wan-Kenobi.png";
} else if (container.name === "Leia Organa") {
containerImage = "Imagem-Leia-Organa.png";
} else {
containerImage = "default-image.png";
}
li.innerHTML = `<div class="main-container">
    <img src="${containerImage}" alt="">
    <h2>${container.name}</h2>
    <p><strong>Birth Year:</strong> ${container.birth_year}</p>
    <p><strong>Height:</strong> ${container.height} cm</p>
    <p><strong>Hair Color:</strong> ${container.hair_color}</p>
    <p><strong>Skin Color:</strong> ${container.skin_color}</p>
    <p><strong>Gender:</strong> ${container.gender}</p>
    <p><strong>Birth Year:</strong> ${container.birth_year}</p>
    <p><strong>Mass:</strong> ${container.Mass}</p>
</div>
`;
containerList.appendChild(li);
}

})
.catch(error => {
console.error(`Error: ${error}`);
});