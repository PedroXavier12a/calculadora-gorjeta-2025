let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber || 0;
    calculateResults();
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber || 0;
    calculateResults();
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;
    removeClassButtonSelected();
    addClassButtonSelected(value);
    document.querySelector("#custom-tip").value = "";
    calculateResults();
}

function addClassButtonSelected(value) {
    buttonSelected = document.querySelector(`#button-${value}`);
    if (buttonSelected) {
        buttonSelected.classList.add("button-selected");
    }
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function receiveCustomTipPorcentegeValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100 || 0;
    removeClassButtonSelected();
    calculateResults();
}

function calculateResults() {
    if (bill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
        let tipAmountPerPerson = (bill * tipPercentage) / numberOfPeople;
        let totalPerPerson = (bill * (1 + tipPercentage)) / numberOfPeople;

        document.querySelector(".amount strong").textContent = `$${tipAmountPerPerson.toFixed(2)}`;
        document.querySelector(".total strong").textContent = `$${totalPerPerson.toFixed(2)}`;
    }
}
