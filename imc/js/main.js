import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


/* Formas de submeter o form
1. att onsubmit na tag <form>, passando uma função
*/

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weightValue = inputWeight.value
    const heightValue = inputHeight.value
    const showAlertError = notANumber(weightValue) || notANumber(heightValue)
    
    if (showAlertError) {
        AlertError.open();
        return;
    }
    AlertError.close()

    const imc = imcCalc(weightValue, heightValue)
    Modal.msgImc.innerHTML = `Seu IMC é de ${imc}`
    Modal.open();
}

Modal.btnClose.onclick = () => Modal.close()

function notANumber(value) {
    return isNaN(value) || value == ""
}

function imcCalc(weight, height) {
    return (weight / ((height/100) ** 2 )).toFixed(2)
}

