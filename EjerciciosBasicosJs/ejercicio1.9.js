//Ejercicio 9
var frase = prompt("Ingrese una frase y contaremos cuantas letras ´a´ tiene: ");
var cont = 0;

for (var i = 0; i < frase.length; i++) {
  if (frase.charAt(i).toLowerCase() === 'a') {
    cont++;
  }
}

console.log("La letra 'a' aparece " + cont + " veces en la frase ");