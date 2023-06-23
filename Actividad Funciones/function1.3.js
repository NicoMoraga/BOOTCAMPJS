function sumaArreglo(arr) {
    var longitud = arr.length;
    var suma = arr.reduce((acc, num) => acc + num, 0);
  
    return {
      longitud: longitud,
      suma: suma
    };
  }
  
  // Ejemplo de uso
  var numeros = [8, 2, 3, 4, 5];
  var resultado = sumaArreglo(numeros);
  console.log(resultado.longitud); // Imprime 5
  console.log(resultado.suma); // Imprime 15
  
  