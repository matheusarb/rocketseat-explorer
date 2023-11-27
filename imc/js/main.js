import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, imcCalc } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
    event.preventDefault();
    
    const weightValue = inputWeight.value;
    const heightValue = inputHeight.value;
    const weightOrHeightIsNotANumber = notANumber(weightValue) || notANumber(heightValue);
    
    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }
    AlertError.close();
    
    const imc = imcCalc(weightValue, heightValue);
    displayImcMsg(imc);
}

Modal.btnClose.onclick = () => Modal.close();

function displayImcMsg(imc) {
    Modal.msgImc.innerHTML = `Seu IMC é de ${imc}`;
    Modal.open()
}