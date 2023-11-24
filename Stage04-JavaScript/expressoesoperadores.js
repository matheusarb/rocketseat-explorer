//1. Operadores
//binário

// console.log(a + b);

//unary
// console.log(a = b);

//ternary
// console.log(a == b? 'sim' : 'não');

// 2. New (cria um objeto)
// diferente de atribuir um valor de string padrão, dessa forma tenho acesso às funcs e métodos aplicáveis a Strings
let name = new String('Matheus')
name.Surname = "Ribeiro"
name['Middle'] = "de Araújo"
let date = new Date("2023-11-23")
// console.log(date);
// console.log(name);
// console.log(typeof name);
// console.log(typeof name.Surname);


// 3. COMPARAÇÃO
// == compara valores e retorna booleano
// === compara tipo e valores e retorna booleano
let a = 1
let b = "1"
// console.log(a == b);
// console.log(a === b);

// 4. Operadores lógicos
// && - || (e / ou)

// 5. Operador ternário

// 6. Falsy e Truthy
/*
    FALSY:
        false
        0 
        -0 
        "" 
        null 
        undefined 
        NaN 

    TRUTHY:
        true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
 */
// console.log(true ? true : false);

function calculator(num1, num2, operator) {
    resultado = 0
    // if (operator == null || operator == 0){
    //     throw new Error("Operador é obrigatório!!")
    // }

    switch (operator) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            console.log("Operação inválida.");
    }
    return console.log(`Resultado de ${num1} ${operator} ${num2} é ${resultado}`);
}

// calculator(2, 3)
// try{
//     calculator(2, 3)
// } catch(e){
//     console.log(e);
// }
// calculator(2, 3, '*')
