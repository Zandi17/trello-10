window.addEventListener("load", function() {
	var boxPadre = document.getElementById("padre");
	var contenedor = document.getElementById("contenedor");
	var lista = document.getElementById("lista");
	var formulario = document.getElementById("formulario");
	var input = document.getElementById("ingreso");
	var btnGuardar = document.getElementById("guardar");

	lista.addEventListener("click",function(e){
		e.preventDefault();
		lista.classList.add("ocultar")
		formulario.classList.remove("ocultar");
	});
		btnGuardar.addEventListener("click",function(e){
		e.preventDefault();
		pubTitulo();
	});

	function pubTitulo(){
		formulario.classList.add("ocultar");
		var	divTitulo = document.createElement("div");
		var titulo = document.createElement("span");
		var contenido = input.value;
		var enlace = document.createElement("a");
		
		titulo.textContent = contenido;
		divTitulo.classList.add("fondo");
		enlace.textContent = "Añadir una Tarjeta";
		
		contenedor.appendChild(divTitulo);
		divTitulo.appendChild(titulo);
		contenedor.appendChild(enlace);

		// var inicio = document.createElement("div");
		// boxPadre.appendChild(inicio);
		// inicio.classList.add("lado");
		// inicio.appendChild(lista);
		// lista.classList.remove("ocultar");

		// enlace.addEventListener("click",function(e){
		// 	e.preventDefault();
		// 	nuevaTarjeta(this);
		// });
		// 	function nuevaTarjeta(){
		// 		var formTxtArea = document.createElement("form")
		// 		var txtArea = document.createElement("textarea");
		// 		var boton = document.createElement("button");

		// 		boton.textContent = "Guardar";

		// 		divTitulo.appendChild(formTxtArea)
		// 		formTxtArea.appendChild(txtArea);
		// 		formTxtArea.appendChild(boton);
		// 	}
	}

});



	