// coment single line
/* multiline casdw
acsdw */

/*
  1. Tipos primitivos:
    Boolean
    undefined - atribuído automaticamente para variável q n tem atribuição no programa
    Number - 
      NaN - usado para representar um dado q não é um número
      Infinity - valor simbólico para representar o infinito
    String

  2. 
*/

// 1. STRING 
var simples = 'Oi'
var duplas = "Matheus"
var literals = `${simples}, ${duplas}`
// console.log(literals);

/* 2. NUMBER
    inteiros - 33
    reais - 12.5
    NaN - Not a Number
    Infinity - Infinito
*/

// 3. Boolean

/* 4. Undefined e Null
    Undefined - Não foi definido valor. Undefined é um tipo
    Null - Valor definido, porém nulo por não possuir nada dentro. Só se refere a VALOR
 */
var und
var n = null
var ob = {'':''}
console.log(typeof(und));
console.log(typeof(n));
console.log(typeof(ob));