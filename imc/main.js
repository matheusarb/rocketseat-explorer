const form = document.querySelector("form");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalError = document.querySelector(".alert-error");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalBtnClose = document.querySelector(".modal button.close");
const msgImc = document.querySelector(".modal .title span");

/* Formas de submeter o form
1. att onsubmit na tag <form>, passando uma função
*/

form.onsubmit = (event) => {
    event.preventDefault()

    const weightValue = inputWeight.value
    const heightValue = inputHeight.value
    const Imc = (weightValue / ((heightValue/100) ** 2)).toFixed(2)

    console.log(Imc);
    msgImc.innerHTML = `Seu IMC é de ${Imc}`
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = event => {
    event.preventDefault()
    modalWrapper.classList.remove('open')
}



