// 1. perguntar nome e mostrar
// var nome = prompt('Qual seu nome')
// console.log("Olá, seu m"+nome);


// 2. somar dois nºs
// .|.
// var n1 = Number(prompt('digite um nº: ')) 
// var n2 = Number(prompt('digite um nº: ')) 
// console.log(n1+n2);


// 3. meédia de estudante
// var media, n1, n2, n3;
// n1 = Number(prompt('Digite sua 1ª nota'))
// n2 = Number(prompt('Digite sua 2ª nota'))
// n3 = Number(prompt('Digite sua 3ª nota'))
// media = (n1+n2+n3)/3
// console.log(media);


// 4. lista de compras
// var lista = new Array()
// for(let i = 0; i < 3; i++){
    // item = String(prompt('Que item deseja adicionar? '))
    // lista.push(item)
// }
// console.log(lista);


// let items = []
// for(let i = 0; i < 2; i++){
//     let item = prompt("Digite item "+(i+1))
// }


// 5. Jogo de adivinhação
var lin = ()=>{
    console.log("---------");
}

let numSorteado = Number(Math.round(Math.random()*3))
let userGuess = Number(prompt("Adivinhe o número que estou pensando de 1 a 3"))
let tentativas = 0

if (numSorteado == userGuess){
    console.log("PARABÉNS! VC ACERTOU DE PRIMEIRA");
    alert("VC ACERTOU DE PRIMEIRA")
}

while(numSorteado != userGuess){
    lin()
    console.log(`Sorteado da rodada: ${numSorteado}`);
    userGuess = Number(prompt("Errou! Tente novamente: "))
    tentativas++
    if (numSorteado == userGuess){
        tentativas++
        lin()
        console.log(`PARABÉNS! Nº sorteado: ${numSorteado}`);
        console.log(`Seu Palpite: ${userGuess}`);
        console.log(`Nº de tentativas: ${tentativas}`);
        break;
    }
}
