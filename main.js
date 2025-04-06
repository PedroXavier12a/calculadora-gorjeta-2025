let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

}


function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value /100
    

    removeClasButtonSelected()
    document.querySelector("#custom-tip").value = ""
    
}

function addClasButtonSelected(value) {
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function removeClasButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function receiveCustomTipPorcentegeValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClasButtonSelected()
}
