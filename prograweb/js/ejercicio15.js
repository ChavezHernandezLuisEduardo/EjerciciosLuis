    let estudiantes = [];

function showestudiantes() {
        const estudiantesList = document.getElementById("estudiantesList");
        estudiantesList.innerHTML = ""; // Limpiar la lista antes de mostrar los estudiantes

        estudiantes.forEach(estudiante => {
            const listItem = document.createElement("li");
            listItem.textContent = `Nombre: ${estudiante.nombre}, Calificación: ${estudiante.calificacion}`;
            estudiantesList.appendChild(listItem);
        });
    }

    function agregarEstudiante() {
        const nombreInput = document.getElementById("numero");
        const calificacionInput = document.getElementById("calificacion");

        const nombre = nombreInput.value.trim();
        const calificacion = parseFloat(calificacionInput.value);

        if (nombre === "" || isNaN(calificacion)) {
            alert("Por favor ingrese un nombre y una calificación válida.");
            return;
        }

        const estudiante = {
            nombre: nombre,
            calificacion: calificacion
        };

        estudiantes.push(estudiante);
        nombreInput.value = "";
        calificacionInput.value = "";

        alert("Estudiante agregado correctamente.");
    }

    function operaciones() {
        if (estudiantes.length === 0) {
            alert("Debe agregar al menos un estudiante.");
            return;
        }

        const suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
        const promedio = suma / estudiantes.length;



        const mayor = estudiantes.reduce((mejor, estudiante) =>
            estudiante.calificacion > mejor.calificacion ? estudiante : mejor
        );

        const menor = estudiantes.reduce((peor, estudiante) =>
            estudiante.calificacion < peor.calificacion ? estudiante : peor
        );
        document.getElementById("mayor").value = promedio.toFixed(2); //para ques olo salgan dos decimales usamos fixed
        document.getElementById("menor").value = menor.nombre;
        document.getElementById("promedio").value = mayor.nombre;
    }