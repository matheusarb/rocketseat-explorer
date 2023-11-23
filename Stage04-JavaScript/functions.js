// Frases motivacionais
let randInt1 = Math.floor(Math.random() * 101)
let randInt2 = Math.floor(Math.random() * 101)

function mot(){
  let frases = ['você consegue', 'continue perseverando', 'quem acredita sempre alcança']
  let count = 1
  while(count <= frases.length)
    { 
      let randInt = Math.floor(Math.random() * 3)
      console.log(frases[randInt]);
      count++
    }
}
// mot()

function sum(a, b){
  return a+b
}
// console.log(sum(randInt1, randInt2));

let subject = 'study'
function create(subject){
    subject = 'livro'
    return subject
}
// console.log(create());
// console.log(subject);

// 1. HOISTING DE FUNÇÕES
//  para funções, hoisting só funciona estão apenas declaradas (sem estar armazenadas em variáveis).

// myName()
function myName(){
    console.log('Matheus');
}

// 2. Arrow Function

const t = ()=>{
    console.log('Hellooo');
    console.log('Turu');
    console.log('Poom');
}
// t()

// 3. Callback function
//  função que chama outra função
//  Uma função, ao ser chamada, chama outra função que executa uma tarefa
function callb(func){
    console.log('Antes de executar callback');
    
    func()
    console.log('Depois de executar callback');
}

// callb(
//     () => {
//         console.log('Testando chamada de volta');
// })

// 4. CONSTRUTORES(constructor) e Classes(Class)

class Person2{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

var mat = new Person('Matheus', 30)
var lui = new Person2()
// console.log(mat);
// console.log(lui);

//5. PROTOTYPE
/*
    prototype chain é a herança do JS. O objeto criado com base em um construtor
    herda os métodos e funcionalidades
 */

// 6. Type conversion e Type coersion

// 7. Transformar string <-> number
// let num = 123
// console.log(typeof(String(num)));
// let st = 'asdw'
// console.log(typeof(Number(st)));

// 8. Casas decimais
// let num = 123123213.123123
// console.log(num.toFixed(2))

// 9. minúsculas e maiúsculas
// let test = 'MatheusW'
// console.log(test.toLowerCase());
// console.log(test.toUpperCase());

// 10. Split(), Join() e encontrando palavras (includes(), é case sensitive)
// let txt = 'Alo madeureira, aquele abraço'
// txtArr = txt.split(' ')
// var under = txtArr.join('_')
// console.log(under);
// console.log(txt.includes('Alo'));

// 11. Criando array com New Array()
// let arr = new Array(3)
// console.log(arr.length);
// let word = "texto"
// let arr = word.split('')
// let arr2 = Array.from(word)
// console.log(arr);
// console.log(arr2);

// 12. manipulando arrays
let techs = ['html', 'css', 'JS']
techs.push('C#')
techs.unshift('.NET')
techs.pop()
techs.shift()
var alguns = [techs[0], techs[2]]
console.log(techs.indexOf('css'));
// remover um ou mais:
techs.splice(1,2) 
console.log(techs);
console.log(alguns);