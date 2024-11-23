// Global variables 

const pokemonName = document.getElementById("card-name");
const pokemonHealth = document.getElementById("hp-number");
const saveButton = document.getElementById("save");
const radioButtons = document.getElementsByName("moves");
const moveTwoContainer = document.getElementById("move-2");
const moveThreeContainer = document.getElementById("move-3");
const cardDetailsMoveOneContainer = document.getElementById("move1-section");
const cardDetailsMoveTwoContainer = document.getElementById("move2-section");
const cardDetailsMoveThreeContainer = document.getElementById("move3-section");
const cardContainerBackground = document.getElementById('card-container');
const moveRadioButtonsContainer = document.getElementsByClassName("card-details-moves");
let totalMoves = document.getElementById('total-moves');

const energyArr = ["Colourless", "Dark", "Dragon", "Fairy", "Fighting", "Fire", "Grass", "Lightning", "Steel", "Psychic", "Water"]

// functions

// Retrives type then sets container background image, font color and changes type symbol
const setPokemonCard = () => {
    let pokemonType = document.getElementById("pokemon-type");
    let pokemonTypeNew = document.getElementById("type").value;

    switch (String(pokemonTypeNew)) {
        case "colourless":
            pokemonType.src = "./images/symbols/colourless.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/colorless.png')";
            cardContainerBackground.style.color = '#000000';
            break;
        case "dark":
            pokemonType.src = "./images/symbols/dark.webp";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/darkness_modern.png')"
            cardContainerBackground.style.color = '#ffffff';
            break;
        case "dragon":
            pokemonType.src = "./images/symbols/dragon.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/dragon_old.png')"
            cardContainerBackground.style.color = '#ffffff';
            break;
        case "fairy":
            pokemonType.src = "./images/symbols/fairy.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/fairy.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "fighting":
            pokemonType.src = "./images/symbols/fighting.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/fighting.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "fire":
            pokemonType.src = "./images/symbols/fire.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/fire_modern.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "grass":
            pokemonType.src = "./images/symbols/grass.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/grass.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "lightning":
            pokemonType.src = "./images/symbols/lightning.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/lightning.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "steel":
            pokemonType.src = "./images/symbols/steel.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/metal_classic.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "psychic":
            pokemonType.src = "./images/symbols/psychic.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/psychic.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        case "water":
            pokemonType.src = "./images/symbols/water.png";
            cardContainerBackground.style.backgroundImage = "url('./images/PK_Textures/water.png')"
            cardContainerBackground.style.color = '#000000';
            break;
        default:
            console.log("something went wrong")
    }
}

const setPokemonWeakness = () => {
    let pokemonWeakness = document.getElementById('symbol-weakness');
    let newPokemonWeakness = document.getElementById('weakness').value;

    switch (String(newPokemonWeakness)) {
        case "colourless":
            pokemonWeakness.src = './images/symbols/colourless.png';
            break;
        case "dark":
            pokemonWeakness.src = './images/symbols/dark.webp';
            break;
        case "dragon":
            pokemonWeakness.src = './images/symbols/dragon.png';
            break;
        case "fairy":
            pokemonWeakness.src = './images/symbols/fairy.png';
            break;
        case "fighting":
            pokemonWeakness.src = './images/symbols/fighting.png';
            break;
        case "fire":
            pokemonWeakness.src = './images/symbols/fire.png';
            break;
        case "grass":
            pokemonWeakness.src = './images/symbols/grass.png';
            break;
        case "lightning":
            pokemonWeakness.src = './images/symbols/lightning.png';
            break;
        case "steel":
            pokemonWeakness.src = './images/symbols/steel.png';
            break;
        case "psychic":
            pokemonWeakness.src = './images/symbols/psychic.png';
            break;
        case "water":
            pokemonWeakness.src = './images/symbols/water.png';
            break;
        default:
            console.log('Something went wrong');
    }
}

const setPokemonResistance = () => {
    let pokemonResistance = document.getElementById('symbol-resistance');
    let newPokemonResistance = document.getElementById('resistance').value;
    let pokemonResistanceAmount = document.getElementById('resistance-amount');

    switch (String(newPokemonResistance)) {
        case "none":
            pokemonResistance.src = './images/symbols/none.png';
            pokemonResistanceAmount.style.color = "rgb(215, 214, 213)";

            break;
        case "colourless":
            pokemonResistance.src = './images/symbols/colourless.png';
            pokemonResistanceAmount.innerHTML = "-20"
            pokemonResistanceAmount.style.color = "black";
            break;
        case "dark":
            pokemonResistance.src = './images/symbols/dark.webp';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "dragon":
            pokemonResistance.src = './images/symbols/dragon.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fairy":
            pokemonResistance.src = './images/symbols/fairy.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fighting":
            pokemonResistance.src = './images/symbols/fighting.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fire":
            pokemonResistance.src = './images/symbols/fire.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "grass":
            pokemonResistance.src = './images/symbols/grass.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "lightning":
            pokemonResistance.src = './images/symbols/lightning.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "steel":
            pokemonResistance.src = './images/symbols/steel.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "psychic":
            pokemonResistance.src = './images/symbols/psychic.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "water":
            pokemonResistance.src = './images/symbols/water.png';
            pokemonResistanceAmount.innerHTML = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        default:
            console.log('Something went wrong');
    }
}

const setRetreatCost = () => {
    let newRetreatCost = document.getElementById('retreat').value;
    let retreatCost = document.getElementById('symbol-retreat');

    console.log(retreatCost, newRetreatCost);
    if (newRetreatCost === "none") {
        retreatCost.children[0].style.display = "none";
        retreatCost.children[1].style.display = "none";
        retreatCost.children[2].style.display = "none";
        retreatCost.children[3].style.display = "none";
    } else if (newRetreatCost === "one") {
        retreatCost.children[0].style.display = "block";
        retreatCost.children[1].style.display = "none";
        retreatCost.children[2].style.display = "none";
        retreatCost.children[3].style.display = "none";
    } else if (newRetreatCost === "two") {
        retreatCost.children[0].style.display = "block";
        retreatCost.children[1].style.display = "block";
        retreatCost.children[2].style.display = "none";
        retreatCost.children[3].style.display = "none";
    } else if (newRetreatCost === "three") {
        retreatCost.children[0].style.display = "block";
        retreatCost.children[1].style.display = "block";
        retreatCost.children[2].style.display = "block";
        retreatCost.children[3].style.display = "none";
    } else {
        retreatCost.children[0].style.display = "block";
        retreatCost.children[1].style.display = "block";
        retreatCost.children[2].style.display = "block";
        retreatCost.children[3].style.display = "block";
    }
}

const setMove1 = () => {
    
    let newMove1Name = document.getElementById('move-1-name').value;
    let newMove1Cost = document.getElementById('move-1-cost').value;
    let newMove1Element = document.getElementById('move-1-element').value;
    let newMove1Damage = document.getElementById('move-1-damage').value;
    let move1Description = document.getElementById('move-1-description').value;
}

const runCode = () => {
    let pokemonNameNew = document.getElementById("pokemon-name").value;
    let pokemonHealthNew = document.getElementById("health").value;
    let newPokemonDescription = document.getElementById("description").value;
    let pokemonDescription = document.getElementById("card-description")
    pokemonName.innerText = pokemonNameNew;
    pokemonHealth.innerText = pokemonHealthNew;
    pokemonDescription.innerText = newPokemonDescription;
    setPokemonCard();
    setPokemonWeakness();
    setPokemonResistance();
    setRetreatCost();
    setMove1();
};

const radioPosition = () => {
    let totalMovesPosition = document.getElementById('total-moves').value;
    let moveRadioPosition = document.querySelector('input[name=moves]:checked').value;
    console.log(totalMovesPosition, moveRadioPosition)
    switch (String(totalMovesPosition)) {
        case "one":
            moveTwoContainer.style.display = "none";
            moveThreeContainer.style.display = "none";
            cardDetailsMoveOneContainer.classList.remove("visually-hidden");
            cardDetailsMoveTwoContainer.classList.add("visually-hidden");
            cardDetailsMoveThreeContainer.classList.add("visually-hidden");
        break;
        case "two":
            moveTwoContainer.style.display = "block";
            moveThreeContainer.style.display = "none";
            if (moveRadioPosition === "1") {
                console.log("You're in radio position 1")
                cardDetailsMoveOneContainer.classList.remove("visually-hidden");
                cardDetailsMoveTwoContainer.classList.add("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else if(moveRadioPosition === "2") {
                console.log("You're in radio position 2")
                cardDetailsMoveOneContainer.classList.add("visually-hidden");
                cardDetailsMoveTwoContainer.classList.remove("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            }
        break;
        case "three":
            moveTwoContainer.style.display = "block";
            moveThreeContainer.style.display = "block";
            if (moveRadioPosition === "1") {
                console.log("You're in radio position 1")
                cardDetailsMoveOneContainer.classList.remove("visually-hidden");
                cardDetailsMoveTwoContainer.classList.add("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else if(moveRadioPosition === "2") {
                console.log("You're in radio position 2")
                cardDetailsMoveOneContainer.classList.add("visually-hidden");
                cardDetailsMoveTwoContainer.classList.remove("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else {
                console.log("You're in radio position 3")
                cardDetailsMoveOneContainer.classList.add("visually-hidden");
                cardDetailsMoveTwoContainer.classList.add("visually-hidden");
                cardDetailsMoveThreeContainer.classList.remove("visually-hidden");
            }
        break;
    }
    
};

radioPosition();

// Event listeners
saveButton.addEventListener("click", runCode);

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", radioPosition);
}

totalMoves.addEventListener("click", function() {
    let radioLabels = document.querySelectorAll(".radio-label");

    if(totalMoves.value === "one") {
        moveRadioButtonsContainer[0].style.display = "none";
        radioPosition();
    }else if(totalMoves.value === "two") {
        moveRadioButtonsContainer[0].style.display = "block";
        radioButtons[0].style.display = "inline-block";
        radioButtons[1].style.display = "inline-block";
        radioButtons[2].style.display = "none";
        radioLabels[0].style.display = "inline-block";
        radioLabels[1].style.display = "inline-block";
        radioLabels[2].style.display = "none";
        radioPosition();
    } else {
        moveRadioButtonsContainer[0].style.display = "block";
        radioButtons[0].style.display = "inline-block";
        radioButtons[1].style.display = "inline-block";
        radioButtons[2].style.display = "inline-block";
        radioLabels[0].style.display = "inline-block";
        radioLabels[1].style.display = "inline-block";
        radioLabels[2].style.display = "inline-block";
        radioPosition();
    }
});

