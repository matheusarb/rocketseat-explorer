// Variáveis
const inputNumber = document.querySelector("#inputNumber");
const msgAcerto = document.querySelector(".screen2 h2")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry");
const btnRestart = document.querySelector("#btnRestart");
const msgError = document.querySelector(".error")
let tentativas = 0

// funções callback
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão/não envie o formulário
    
    let randomNum = Math.round(Math.random() * 10)
    tentativas++
    console.log("tentativas = "+tentativas);
    
    if (Number(inputNumber.value) < 0) {
        inputNumber.value = Math.abs(inputNumber.value)
    }
    
    console.log("input = "+ inputNumber.value);
    console.log("randomNum = "+randomNum);

    if (Number(inputNumber.value) == randomNum) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        msgAcerto.innerText = `Parabéns! Você acertou em ${tentativas} vezes`
    } else {
        msgError.classList.remove("hide")
    }
}
function handleReset() {
    toogleScreen()
    tentativas = 0
    console.clear()
}
function toogleScreen() {
    // toggle = Onde estiver com hide ele tira e onde não estiver ele coloca
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
    msgError.classList.toggle("hide")
}

// Eventos (A de reset foi anônima)
btnTry.addEventListener("click", handleTryClick)
btnRestart.addEventListener("click", handleReset)
document.addEventListener("keypress", (e) => {
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        handleReset()
    }
})