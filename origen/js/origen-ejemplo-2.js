$(window).on("message", function(e) {
	var $confirmacion = $("small.help-text"),
			origenRemoto = e.originalEvent.origin,
			datosOrigenRemoto = e.originalEvent.data;

	if(origenRemoto == "http://127.0.0.1:4444") {
		$confirmacion.text("Remoto responde: "+datosOrigenRemoto);
		console.log(origenRemoto);
		console.log(datosOrigenRemoto);
	}
});

(function($) {
	var $formulario = $("form"),
			datos = {
				str: "Cadena de texto",
				bool: true,
				num: 42,
				obj: {
					regExp: new RegExp(/.?/),
					date: new Date()
				},
				array: [1, "foo", "bar", true, false, { foo: "bar" }]
			},
			transferable = new ArrayBuffer(5),
			$remoto = $("#remoto"),
			$selector = $formulario.find("select.form-control"),
			targetOrigin = "http://127.0.0.1:4444";


	$formulario.find("button.enviar").on("click", function(e) {
		e.preventDefault();
		var seleccion = $selector.find("option:selected").val();

		$remoto.get(0).contentWindow.postMessage(datos[seleccion], targetOrigin);
		console.log(seleccion);
		console.log(datos[seleccion]);
	});

	$formulario.find("button.mostrarTransferible").on("click", function(e) {
		e.preventDefault();
		var $_this = $(this),
				transferible = transferable.toSource ? transferable.toSource() : "{ foo: \"bar\" }",
				$code = $("code");

			$code.text( "Longitud de byte de este ArrayBuffer es " + transferable.byteLength ).removeClass("hide");

	});

	$formulario.find("button.enviarTransferable").on("click", function(e) {
		e.preventDefault();
		console.log(transferable);
		/* Enviando un ArrayBuffer como transferable una vez hecho esto los datos que contenía
		no estarán disponibles nunca más en el origen */
		$remoto.get(0).contentWindow.postMessage(transferable, targetOrigin, [transferable]);

	});

}($));
