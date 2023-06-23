var n = prompt("Ingrese un numero: ")
var caracter = prompt("Ingrese un caracter: ")
var result;

function generar_caracteres(n, caracter){
    return caracter.repeat(n)
}

result = generar_caracteres(n, caracter)
console.log(result)