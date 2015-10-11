window.onload = function() {
  var log = document.getElementById("log");

	function mensajeAOrigen(dato) {
		var mensaje = "Se recibio correctamente un elemento tipo";
		if( !!dato.join ) {
			mensaje += " array";
		} else {
			mensaje += " "+typeof dato;
		}

		return mensaje;
	}

	function datoToSource( dato ) {
		if( !!dato.toSource ) {
			return dato.toSource();
		} else {
			return toSource(dato);
		}
	}

  function recibeMensaje(e) {
    var origen = e.origin,
        datos = e.data,
				respuesta = null,
        arrayTipado = null;

  		console.log(datos);

      if(origen === "http://127.0.0.1:5555") {
        if( datos.byteLength ) {
          arrayTipado = new Int8Array(datos);
          log.innerHTML += "El mensaje enviado por el origen  "+ origen +" fue: "+arrayTipado.toSource()+"<br/>";
        } else {
          log.innerHTML += "El mensaje enviado por el origen  "+ origen +" fue: "+datos.toSource()+"<br/>";
        }

        respuesta = mensajeAOrigen(datos);
        e.source.postMessage(respuesta, e.origin);

      } else {
        log.innerHTML += "origen no permitido";
      }

  }

  window.addEventListener("message", recibeMensaje, false);

}
