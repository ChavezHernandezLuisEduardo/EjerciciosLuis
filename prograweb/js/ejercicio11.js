 function convertir() {
        var numero = document.getElementById("numero").value;
        if (numero == "") {
            alert("Por favor, ingrese un número.");
            return;
        }
        var M = numero * 0.621371;
        document.getElementById("resultado").value = M.toFixed(5);
    }