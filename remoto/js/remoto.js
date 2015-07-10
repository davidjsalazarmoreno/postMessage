window.onload = function() {
  var textoEnRemoto = document.getElementsByTagName("p")[0];

  window.addEventListener("message", function(e) {
    var origen = e.origin,
        datos = e.data;

    if(origen === "http://fiddle.jshell.net") {
      textoEnRemoto.innerHTML = "El mensaje enviado por el origen  "+ origen +" fue: "+datos;
      e.source.postMessage("resultado", e.origin);
    } else {
      textoEnRemoto.innerHTML = "origen no permitido";
    }
  }, false);

}
