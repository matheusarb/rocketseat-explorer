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
    func()
}

callb(
    () => {
        console.log('Testando chamada de volta');
})

// 4. 