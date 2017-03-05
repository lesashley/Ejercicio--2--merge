var cajaVacia = document.getElementById("leer");
document.getElementById("enviar").onclick=function calcular() {
  var nombre = document.getElementById("nombre").value;
  var peso = document.getElementById("peso").value;
  var talla = document.getElementById("talla").value;

  document.getElementById("resultado").value = "Nombre: " + nombre + "\n"+
      "Indice de masa corporal (IMC):  " + Math.floor(peso/Math.pow((talla/100),2));

  cajaVacia.innerHTML="<pre>  Peso inferior al normal     "+  "Menos de 18.5<br>"+
  "Normal	                    18.5 – 24.9<br>"+
  "Peso superior al normal	    25.0 – 29.9<br>"+
  "Obesidad	            Más de 30.0</pre>";
}

document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
}
