// Declare variables 

const pokemonName = document.getElementById("card-name");
const pokemonHealth = document.getElementById("hp-number");
let pokemonType = document.getElementById("pokemon-type");
let saveButton = document.getElementById("save");
const radioButtons = document.getElementsByName("moves");
const moveTwoContainer = document.getElementById("move-2");
const moveThreeContainer = document.getElementById("move-3");
const cardDetailsMoveTwoContainer = document.getElementById("move2-section");
const cardDetailsMoveThreeContainer = document.getElementById("move3-section");

console.log(cardDetailsMoveThreeContainer, cardDetailsMoveTwoContainer);

//Save button function
const runCode = () => {
    let pokemonNameNew = document.getElementById("pokemon-name").value;
    let pokemonTypeNew = document.getElementById("type").value;
    let pokemonHealthNew = document.getElementById("health").value;
    pokemonName.innerHTML = pokemonNameNew;
    pokemonType.src = pokemonTypeNew;
    pokemonHealth.innerHTML = pokemonHealthNew;
};

const radioPosition = () => {
    let moveRadioPosition = document.querySelector('input[name=moves]:checked').value;
    if(moveRadioPosition === "1") {
        moveTwoContainer.style.display = 'none';
        moveThreeContainer.style.display = 'none';
        cardDetailsMoveTwoContainer.style.display = 'none';
        cardDetailsMoveThreeContainer.style.display = 'none';
    } else if (moveRadioPosition === "2") {
        moveTwoContainer.style.display = 'block';
        moveThreeContainer.style.display = 'none';
        cardDetailsMoveTwoContainer.style.display = 'block';
        cardDetailsMoveThreeContainer.style.display = 'none';
    } else {
        moveTwoContainer.style.display = 'block';
        moveThreeContainer.style.display = 'block';
        cardDetailsMoveTwoContainer.style.display = 'block';
        cardDetailsMoveThreeContainer.style.display = 'block';
    }
};

radioPosition();

//Event listeners
saveButton.addEventListener("click", runCode);
radioButtons[0].addEventListener("click", radioPosition);
radioButtons[1].addEventListener("click", radioPosition);
radioButtons[2].addEventListener("click", radioPosition);
