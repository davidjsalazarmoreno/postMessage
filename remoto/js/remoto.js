window.onload = function() {
  var textoEnRemoto = document.getElementsByTagName("p")[0];

  window.addEventListener("message", function(e) {
    var origen = e.origin,
        datos = e.data;

    if(origen === "http://127.0.0.1:5555") {
      textoEnRemoto.innerHTML = "El mensaje enviado por el origen  "+ origen +" fue: "+datos;
      e.source.postMessage("exito!", e.origin);
    } else {
      textoEnRemoto.innerHTML = "origen no permitido";
    }
  }, false);

}
