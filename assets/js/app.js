document.getElementById('enviar').onclick = function calcularImc(){
  var nombre = document.getElementById("nombre").value;
  var peso = document.getElementById("peso").value;
  var talla = document.getElementById("talla").value;
  var show = document.getElementById("resultado");
  show.innerHTML="Hola "+nombre+" tu indice de masa corporal es: "+peso/(talla*talla).toFixed(2);
}
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
}
