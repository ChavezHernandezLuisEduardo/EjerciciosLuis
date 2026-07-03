  function votar() {
            var edad = document.getElementById("numero").value;
            if (edad == "") {
                alert("Por favor, ingrese su edad.");
                return;
            }
            if (edad < 0) {
                alert("Por favor, ingrese una edad válida.");
                return;
            }
            if (edad >= 18) {
                document.getElementById("resultado").value = "Puede votar.";
            } else {
                document.getElementById("resultado").value = "No puede votar.";
            }
        }