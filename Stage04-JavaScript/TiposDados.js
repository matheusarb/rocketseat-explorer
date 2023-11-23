console.clear()

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

// 3. BOOLEAN

/* 4. Undefined e Null
    Undefined - Não foi definido valor. Undefined é um tipo
    Null - Valor definido, porém nulo por não possuir nada dentro. Só se refere a VALOR
 */
var und
var n = null
var ob = {}

// console.log(typeof(und));
// console.log(typeof(n));
// console.log(typeof(ob));

/* 5. OBJECTS
     dado estrutural, com propriedades e atributos
     recebe funcionalidades e métodos tb
*/
var obj2 = {}
obj2["nome"] = "Matheus"
obj2["funcao"] = function um(){console.log('Teste função')};
obj2.nome = 'Luiggi'
// console.log(obj2.nome);
// console.log(obj2['nome']);
// console.log(obj2);

/*
    6. ARRAYS (Vetores)
      Uma lista
      Forma de estruturar/agrupar dados 
*/
var arr = [
           0,
           'Bola',
           ()=>console.log('Bond'),
           {'nome': 'Matheus', 'sexo': 'sim'}
          ]

arr[4] = 'tESTANTO'
console.log(arr[3].nome);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]());
// console.log(arr[3]['nome']);
// console.log(arr[3]['sexo']);
// console.log(typeof(arr[3]));

/* VARIÁVEIS ESCOPO
        var
        let - escopo local
        const - 
*/

// 7. Hoisting (SÓ acontece com VAR): joga todas as variáveis globais para o início. Elas sempre existirão como undefined até receberem o valor

// console.log(t1);
var t1 = 'hello'
const t3 = '10'
// console.log(t3);
{
  let t2 = 'testando'
  // console.log(t2);
}

// console.log(t1 + ' ' + t3);
// console.log(`${t1}, ${t3}`);

