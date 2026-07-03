    function convertir() {
      var celsius = document.getElementById("celsius").value;
 
      if (celsius == "" || isNaN(celsius)) {
        alert("Ingresa un número válido");
        return;
      }
 
      var fahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById("resultado").value = fahrenheit;
    }