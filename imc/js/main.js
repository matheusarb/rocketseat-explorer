import { Modal } from "./modal.js";

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
    const Imc = (weightValue / ((heightValue/100) ** 2)).toFixed(2)

    Modal.msgImc.innerHTML = `Seu IMC é de ${Imc}`
    Modal.open()
}

Modal.btnClose.onclick = () => Modal.close()



