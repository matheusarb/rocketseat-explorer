// Frases motivacionais

function mot(){
  let frases = ['você consegue', 'continue perseverando', 'quem acredita sempre alcança']
  let randInt = Math.floor(Math.random() * 3)
  console.log(frases[randInt]); 
}

mot()