var num1 = prompt("Ingrese el primer numero: ")
var num2 = prompt("Ingrese el segundo numero: ")
var num3 = prompt("Ingrese el tercer numero: ")
var numMayor = 0

function numeroMayor(num1,num2,num3){
    return Math.max(num1, num2, num3)
}
numMayor = numeroMayor(num1, num2, num3)
console.log(`El numero mayor entre ${num1}, ${num2} y ${num3} es = ${numMayor}`)