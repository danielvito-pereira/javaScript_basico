// declarando um array 
let array =['nome',1,false];
console.log(array);


// é possível guardar vaios tipos de dados dentro de um array
let array2 =['teste2',2,false,['nome1',1,true],['nome3',3,false]];
console.log(array2);


// manipulando arrays
/*
forEach() -itera um array
push() -add item no final do array
pop() -remove item no final do array
shift -remove item no inicio do array
unshift() -add item no inicio do array
indexOf() -retorna o indice de um valor 
splice() -remove ou substitui um item pelo indice 
slice() -retorna uma parte de um array existente 
*/


//forEach() -itera um array
array.forEach(function(item, index){console.log(item, index)});

//push() -add item no final do array
array.push('novo item ')


//pop() -remove item no final do array
array.pop('novo item ');

//shift -remove item no inicio do array

array.shift();

//unshift() -add item no inicio do array
array.unshift('novo item ');

//indexOf() -retorna o indice de um valor 
console.log(array.indexOf(true));

//splice() -remove ou substitui um item pelo indice 

array.splice(0,3);
console.log(array)

//slice() -retorna uma parte de um array existente 
let novoArray = array.slice(0,3);
console.log(novoArray);