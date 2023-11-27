import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";

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
        alertError.open();
    } else {
        alertError.close();
    }

    
}

Modal.btnClose.onclick = () => Modal.close()


function notANumber(value) {
    return isNaN(value) || value == ""
}


