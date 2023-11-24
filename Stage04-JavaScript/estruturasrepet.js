// 1. ESTRUTURAS DE REPETIÇÃO

// 2. for
for (let i = 0; i <= 10; i++){
    var texto = new String()
    texto += `${i} ` 
    if(i == 4){
        texto += 'pulei o 4 ';
        continue
    }
    // console.log(texto);
}

// 3. while

// 4. for... of
// serve pra percorrer items de listas/arrays
// parece o foreach
let nome = "Matheus"
let names = [nome, "Luiggi", "Tavares"]

for (let char of nome){
    // console.log(char);
}

for (let i of names){
    // console.log(i);
}

// 5. for... in
// loop para OBJETOS (pegar propriedades, etc...)
let carros = {
    marca: "nissan",
    modelo: "sentra",
    cavalos: "160cv"
}

for (let prop in carros){
    console.log(carros[prop]);
}
