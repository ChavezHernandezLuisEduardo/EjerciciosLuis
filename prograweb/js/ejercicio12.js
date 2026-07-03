var tasa_de_cambio = 0.057;
function convertir() {
    var mxn = document.getElementById("mxn").value;
    if (mxn == "") {
        alert("Por favor, ingrese una cantidad en pesitos mexicanos.");
        return;
    }
   if (mxn < 0) {
        alert("Por favor ingresar numeros positivos");
        return;
    }
    
    var usd = mxn * tasa_de_cambio;
    document.getElementById("usd").value = usd.toFixed(2);}

