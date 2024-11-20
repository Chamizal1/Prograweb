//codigo que realiza las operacion multiplicar, sumar, restar
//Imperativa
/*    const Numeros = [1,2,3,4,5,6];
    let suma = 0;
    let resta = Numeros[0];
    let multi = 1;

    for (let i = 0; i < Numeros.length; i++) {
        suma += Numeros[i];
    }
    for (let j = 1; j < Numeros.length; j++) {
    resta = Numeros[j] - resta
    }
    for (let k = 0; k < Numeros.length; k++) {
        multi = multi*Numeros[k];
    }
*/
console.log("Resultado de la suma: "+suma);
console.log("Resultado de la multiplicacion: "+ multi);
console.log("Resultado de la resta es: "+ resta);
//Declarativa

const Numeros = [1, 2, 3, 4, 5, 6];

const suma = Numeros.reduce((acc, num) => acc + num, 0);

const resta = Numeros.reduce((acc, num) => acc - num, Numeros[0]);

const multi = Numeros.reduce((acc, num) => acc * num, 1);

console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multi);

/*
//imperativoconst 

tablaMultiplicar8 = [];
for (let i = 1; i <= 10; i++) {
    tablaMultiplicar8.push(8 * i);
}
console.log(tablaMultiplicar8);

//declarativo
const tablaMultiplicar8 = Array.from({ length: 10 }, (_, i) => 8 * (i + 1));
console.log(tablaMultiplicar8);


*/