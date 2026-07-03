    function operaciones() {
        let cadena = document.getElementById("numero").value;
        let arreglo = cadena.split(",");
        let numeros= arreglo.map(Number);

        let mayor = Math.max(...numeros);
        let menor = Math.min(...numeros);
        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length;
        
        document.getElementById("mayor").value = mayor;
        document.getElementById("menor").value = menor;
        document.getElementById("promedio").value = promedio;
        }