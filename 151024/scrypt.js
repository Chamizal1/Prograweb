//definicion de una funcion
/*function hola() {
    console.log("hola");
    console.log("5IV7");
    
}

//llamada a la funcion
hola();
hola();
hola();
hola();
hola();

Retorno de una funcion
*/
/*
function hola(){
    
    return 'hola clase'
}
const resultado = hola();
console.log(resultado);

hola();*/

//funcion que retorna otra funcion
/*
function hola(){
    return function(){
        return 'soy la funcion 2';
    }
}
console.log(hola()());
*/
//ejemplo 1 multiplesparanatreos
/*
function add(x,y){
    if (y===undefined) {
        y=0;
    }
    console.log(x+y);
    
}
add(5,undefined);
*/

//parametro de tipo cadena
/*
function add(name){

    console.log('hola '+name);
    
}
add('clase JS')*/

//objetos

const usuario = {
 nombre:"alvarado",
 apellidoP:"Reyes",
 apellidoM:"Quiroz",
 edad:91,
 dirrecion:{
    calle:"Nicolas Bravo",
    numero:598,
    colonia:"Narvartr",
    delegacion:"Los Pinos"
 },
 amigos:['Raul','Maria'],
 Activo:true
};

//por consola debe de mostrar nombre y apellidoM
//alert si esta activo
//consola
//alert direccion
//console amigos

function Ms(){
console.log(usuario.nombre,usuario.apellidoM);
alert(usuario.Activo)
console.log(usuario.edad);
alert(usuario.dirrecion)
console.log(usuario.amigos);


}
Ms();