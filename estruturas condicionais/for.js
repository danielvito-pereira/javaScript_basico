let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1 : 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// o for repete uma instrução até ela ser falsa 
for (let indice = 0; indice< array.length; indice++) {
    console.log(indice);
}


// for/in executa repetção a partir de uma propriedade
//com array
for (let i in array) {
    console.log(i);
}


//com object
for(i in object) {
    console.log(i);
}


// for of executa repetição a partir de valor
// array
for (i of array) {
    console.log(i);
}


