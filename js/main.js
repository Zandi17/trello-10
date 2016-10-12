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

});



	