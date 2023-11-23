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
mot()

function sum(a, b){
  return a+b
}
console.log(sum(randInt1, randInt2));

let subject = 'study'
function create(subject){

}