function opcao() {
    let op = Number(prompt(`
        O que deseja fazer?
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        5 - Resto da Divisão
        6 - Sair do programa
    `))
    return op
}

let n1 = Number(prompt("Digite o 1º nº inteiro: "));
let n2 = Number(prompt("Digite o 2º nº inteiro: "));
alert(n1 == n2 ? "Os dois nºs são iguais" : "Os dois nºs são diferentes")

while (true) {
    let resp = opcao()

    if(resp == 6){
        alert("O programa será encerrado...")
        break;
    }

    switch(resp){
        case 1:
            alert(`Resultado da soma: ${n1 + n2}`);
            alert(`${(n1 + n2) % 2 == 0 ? "A soma é par" : "A soma é ímpar"}`)
            break;
        case 2:
            alert(`Resultado da subtração: ${n1 - n2}`);
            break;
        case 3:
            alert(`Resultado da multiplicação: ${n1 * n2}`);
            break;
        case 4:
            alert(`Resultado da divisão: ${n1 / n2}`);
            break;
        case 5:
            alert(`Resto da divisão: ${n1 % n2}`);
            break;
        default:
            alert(`Opção inválida.`);
            break;
    }
}