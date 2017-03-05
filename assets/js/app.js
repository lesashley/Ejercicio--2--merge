
document.getElementById("enviar").onclick=function calcular(){
  var nombre = document.getElementById("nombre").value;
  var peso = document.getElementById("peso").value;
  var talla = document.getElementById("talla").value;
    if(typeof(nombre) == "string" && typeof(talla) == "number"  ){
      document.getElementById("resultado").value = "Nombre: " + nombre + "\n"+
      "Indice de masa corporal (IMC): " + "\n"+ Math.floor(peso/Math.pow(talla,2));
    } else{
      document.getElementById("resultado").value="Datos incorrectos";
    }
}


/*
var cajaVacia=document.getElementById("leer");
document.getElementById("enviar").onclick=function resultado() {
  cajaVacia.innerText=
  "Composición corporal         "      +   	"Indice de masa corporal (IMC)" + "\n"+
  "Peso inferior al normal      " + "Menos de 18.5" + "\n"+
  "Normal                       " + "18.5 – 24.9" + "\n" +
  "Peso superior al normal      "	+  "25.0 – 29.9" + "\n"+
  "Obesidad                     " +  " Más de 30.0";
}
*/

document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}
