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

const randomNum = Math.round(Math.random() * 10)
const inputNumber = document.querySelector("#inputNumber");
const msgAcerto = document.querySelector(".screen2 h2")
const div1 = document.querySelector(".screen1")
const div2 = document.querySelector(".screen2")
let tentativas = 0

function handleClick(event) {
    event.preventDefault()

    tentativas++

    console.log(inputNumber.value);
    console.log(randomNum);

    if (Number(inputNumber.value) == randomNum) {
        div1.classList.add("hide")
        div2.classList.remove("hide")
        msgAcerto.innerText = `Acertou em ${tentativas} vezes`
        console.log(`Acertou em ${tentativas} tentativas`);
    } else {
        
        
    }
}