window.onload = function() {
  var p = document.getElementsByTagName("p");
  window.addEventListener("message", function(e) {
    console.log(e);
    console.log(e.origin);
    console.log(Object.freeze(e.data));
    e.data.hola = "foo";
    console.log(e.data);
    console.log(e.originalTarget);

    if( e.origin === "http://127.0.0.1:7575" ) {
      p[0].innerHTML = "El mensaje enviado por el origen  "+ e.origin +" fue: "+e.data;
      e.source.postMessage("result", e.origin);
    } else {
      console.warn("origen no permitido");
    }
  }, false);

}
