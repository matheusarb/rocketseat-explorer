var lin = () => console.log("---------");
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

// 6. Menu de Opções
// let listaItens = []
// while(true){
//     let sairAgora = false
//     let option = Number(prompt(`
//         1. Cadastrar um item
//         2. Mostrar itens cadastrados
//         3. Sair do programa
//     `))

//     switch(option){
//         case 1:
//             let item = prompt("Digite o nome do item: ")
//             listaItens.push(item)
//             console.log(listaItens);
//             break;
//         case 2:
//             console.log(listaItens);
//             break;
//         case 3:
//             console.log("Programa finalizando...");
//             sairAgora = true
//             break;
//         }

//         if(sairAgora == true){
//             break;
//         }

//         resp = String(prompt("Deseja continuar? ")).toLowerCase()
//         if(resp == 'n'){
//             console.log("Programa finalizando...");
//             break;
//     }
// }

// 7. Lista de pacientes
var listaPac = [
  {
    nome: "Matheus",
    idade: 30,
    peso: 75.2,
    altura: 1.72,
  },
  {
    nome: "Luiggi",
    idade: 30,
    peso: 75.2,
    altura: 1.75,
  },
  {
    nome: "Joao",
    idade: 30,
    peso: 75.2,
    altura: 1.75,
  },
];
// var l = listaPac.length
// console.log(l);
// for(let i=0; i < l; i++){
//     if(listaPac[i].nome == 'Joao'){
//         console.log(`Aqui está o ${listaPac[i].nome}`);
//     }
// }

// 8. Calcular IMC

function calcularIMC(lista, i) {
  if (i == null) {
    throw new Error("O 2º parâmetro é obrigatório!");
  }
  if (Array.isArray(lista) && i >= lista.length) {
    throw new Error("Número ultrapassa a quantidade de pacientes na lista.");
  }

  console.log(`Paciente ${listaPac[i].nome} possui IMC de ${(
    listaPac[i].peso /
    listaPac[i].altura ** 2
  ).toFixed(2)}
    `);
}
// try {
//   calcularIMC(listaPac, 0);
// } catch (e) {
//   console.log(e);
// }

console.log(typeof(listaPac));
console.log(typeof listaPac);