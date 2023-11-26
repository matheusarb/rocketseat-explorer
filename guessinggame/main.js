// 5. Jogo de adivinhação
// let numSorteado = Number(Math.round(Math.random()*3))
// let userGuess = Number(prompt("Adivinhe o número que estou pensando de 1 a 3"))
// let tentativas = 0

// if (numSorteado == userGuess){
//     console.log("PARABÉNS! VC ACERTOU DE PRIMEIRA");
//     alert("VC ACERTOU DE PRIMEIRA")
// }

// while(numSorteado != userGuess){
//     lin()
//     console.log(`Sorteado da rodada: ${numSorteado}`);
//     userGuess = Number(prompt("Errou! Tente novamente: "))
//     tentativas++
//     if (numSorteado == userGuess){
//         tentativas++
//         lin()
//         console.log(`PARABÉNS! Nº sorteado: ${numSorteado}`);
//         console.log(`Seu Palpite: ${userGuess}`);
//         console.log(`Nº de tentativas: ${tentativas}`);
//         break;
//     }
// }

const inputNumber = document.querySelector("#inputNumber");
const msgAcerto = document.querySelector(".screen2 h2")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry");
const btnRestart = document.querySelector("#btnRestart");
let tentativas = 0

function handleTryClick(event) {
    event.preventDefault() //não faça o padrão/não envie o formulário
    const randomNum = Math.round(Math.random() * 10)
    tentativas++
    console.log(inputNumber.value);
    console.log(randomNum);
    
    if (Number(inputNumber.value) < 0) {
        inputNumber.value = Math.abs(inputNumber.value)
    }
    
    console.log(inputNumber.value);
    console.log(randomNum);

    if (Number(inputNumber.value) == randomNum) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        msgAcerto.innerText = `Acertou em ${tentativas} vezes`
    }
}

btnTry.addEventListener("click", handleTryClick)
btnRestart.addEventListener("click", () => {
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
})

