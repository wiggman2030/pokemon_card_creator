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
const totalMoves = document.getElementById('total-moves');
const moveCost = document.getElementById('move1-cost');
let totalElements1 = 0;
let totalElements2 = 0;
let totalElements3 = 0;
const addButton = document.getElementsByClassName('add-element-btn');
const removeButton = document.getElementsByClassName('minus-element-btn');

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
            pokemonType.src = "./images/symbols/dark.png";
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
};

const setPokemonWeakness = () => {
    let pokemonWeakness = document.getElementById('symbol-weakness');
    let newPokemonWeakness = document.getElementById('weakness').value;

    switch (String(newPokemonWeakness)) {
        case "dark":
            pokemonWeakness.src = './images/symbols/dark.png';
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
};

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
            pokemonResistanceAmount.innerText = "-20"
            pokemonResistanceAmount.style.color = "black";
            break;
        case "dark":
            pokemonResistance.src = './images/symbols/dark.webp';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "dragon":
            pokemonResistance.src = './images/symbols/dragon.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fairy":
            pokemonResistance.src = './images/symbols/fairy.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fighting":
            pokemonResistance.src = './images/symbols/fighting.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "fire":
            pokemonResistance.src = './images/symbols/fire.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "grass":
            pokemonResistance.src = './images/symbols/grass.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "lightning":
            pokemonResistance.src = './images/symbols/lightning.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "steel":
            pokemonResistance.src = './images/symbols/steel.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "psychic":
            pokemonResistance.src = './images/symbols/psychic.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        case "water":
            pokemonResistance.src = './images/symbols/water.png';
            pokemonResistanceAmount.innerText = "-20";
            pokemonResistanceAmount.style.color = "black";
            break;
        default:
            console.log('Something went wrong');
    }
};

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
};

const addElement = (move) => {
    let newMove1Element = document.getElementById('move1-element').value;
    let newMove2Element = document.getElementById('move2-element').value;
    let newMove3Element = document.getElementById('move3-element').value;
    const elementSymbol = document.getElementsByClassName("move-1-cost");
    const elementSymbol2 = document.getElementsByClassName("move-2-cost");
    const elementSymbol3 = document.getElementsByClassName("move-3-cost");
    let newElementUrl = document.createElement("img");
    newElementUrl.src = `./images/symbols/${newMove1Element}.png`;
    console.log(newElementUrl);

    if (move === "one" && totalElements1 < 5) {
        newElementUrl.src = `./images/symbols/${newMove1Element}.png`;
        elementSymbol[0].appendChild(newElementUrl);
        totalElements1++;
    } else if (move === "two" && totalElements2 < 5) {
        newElementUrl.src = `./images/symbols/${newMove2Element}.png`;
        elementSymbol2[0].appendChild(newElementUrl);
        totalElements2++;
    } else if (move === "three" && totalElements3 < 5) {
        newElementUrl.src = `./images/symbols/${newMove3Element}.png`;
        elementSymbol3[0].appendChild(newElementUrl);
        totalElements3++;
    } else {
        console.log("Something went wrong");
    };
}

const removeElement = (move) => {
    const elementSymbol = document.getElementsByClassName("move-1-cost");
    const elementSymbol2 = document.getElementsByClassName("move-2-cost");
    const elementSymbol3 = document.getElementsByClassName("move-3-cost");

    if (move === "one" && totalElements1 > 0) {
        elementSymbol[0].removeChild(elementSymbol[0].firstChild);
        totalElements1--;
    } else if (move === "two" && totalElements2 > 0){
        elementSymbol2[0].removeChild(elementSymbol2[0].firstChild);
        totalElements2--;
    } else if (move === "three" && totalElements3 > 0){
        elementSymbol3[0].removeChild(elementSymbol3[0].firstChild);
        totalElements3--;;
    } else {
        console.log("Something went wrong");
    };
}

const setMove1 = () => {
    let newMove1Name = document.getElementById('move1-name').value;
    let newMove1Damage = document.getElementById('move1-damage').value;
    let newMove1Description = document.getElementById('move1-description').value;
    const move1Container = document.getElementById('move-1');

    move1Container.children[0].children[1].innerText = newMove1Name;
    move1Container.children[0].children[2].innerText = newMove1Damage;
    move1Container.children[1].innerText = newMove1Description;
};

const setMove2 = () => {
    let newMove2Name = document.getElementById('move2-name').value;
    let newMove2Damage = document.getElementById('move2-damage').value;
    let newMove2Description = document.getElementById('move2-description').value;
    const move2Container = document.getElementById('move-2');

    move2Container.children[0].children[1].innerText = newMove2Name;
    move2Container.children[0].children[2].innerText = newMove2Damage;
    move2Container.children[1].innerText = newMove2Description;
};

const setMove3 = () => {
    let newMove3Name = document.getElementById('move3-name').value;
    let newMove3Damage = document.getElementById('move3-damage').value;
    let newMove3Description = document.getElementById('move3-description').value;
    const move3Container = document.getElementById('move-3');

    move3Container.children[0].children[1].innerText = newMove3Name;
    move3Container.children[0].children[2].innerText = newMove3Damage;
    move3Container.children[1].innerText = newMove3Description;
};

const runCode = () => {
    let pokemonNameNew = document.getElementById("pokemon-name").value;
    let pokemonHealthNew = document.getElementById("health").value;
    let newPokemonDescription = document.getElementById("description").value;
    let pokemonDescription = document.getElementById("card-description");
    pokemonName.innerText = pokemonNameNew;
    pokemonHealth.innerText = pokemonHealthNew;
    pokemonDescription.innerText = newPokemonDescription;
    setPokemonCard();
    setPokemonWeakness();
    setPokemonResistance();
    setRetreatCost();
    setMove1();
    setMove2();
    setMove3();
};

// displays the correct amount of radio buttons and move slots based on total moves
const radioPosition = () => {
    let totalMovesPosition = document.getElementById('total-moves').value;
    let moveRadioPosition = document.querySelector('input[name=moves]:checked').value;

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
                cardDetailsMoveOneContainer.classList.remove("visually-hidden");
                cardDetailsMoveTwoContainer.classList.add("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else if(moveRadioPosition === "2") {
                cardDetailsMoveOneContainer.classList.add("visually-hidden");
                cardDetailsMoveTwoContainer.classList.remove("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            }
        break;
        case "three":
            moveTwoContainer.style.display = "block";
            moveThreeContainer.style.display = "block";
            if (moveRadioPosition === "1") {
                cardDetailsMoveOneContainer.classList.remove("visually-hidden");
                cardDetailsMoveTwoContainer.classList.add("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else if(moveRadioPosition === "2") {
                cardDetailsMoveOneContainer.classList.add("visually-hidden");
                cardDetailsMoveTwoContainer.classList.remove("visually-hidden");
                cardDetailsMoveThreeContainer.classList.add("visually-hidden");
            } else {
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

console.log(addButton);

addButton[0].addEventListener("click", function() {
    addElement("one");
});

addButton[1].addEventListener("click", function() {
    addElement("two");
});

addButton[2].addEventListener("click", function() {
    addElement("three");
});

removeButton[0].addEventListener("click", function() {
    removeElement("one");
});

removeButton[1].addEventListener("click", function() {
    removeElement("two");
});

removeButton[2].addEventListener("click", function() {
    removeElement("three");
});

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", radioPosition);
};

totalMoves.addEventListener("click", function() {
    let radioLabels = document.querySelectorAll(".radio-label");

    if(totalMoves.value === "one") {
        moveRadioButtonsContainer[0].style.display = "none";
        radioPosition();
    }else if(totalMoves.value === "two") {
        document.getElementById('one').checked = true;
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