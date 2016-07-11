$(document).ready(function(){

	$("#dropdownMenu1").html(centros[0].Nombre+ '<span class="caret pull-right"></span>');





	var lista= document.getElementById("lista1");

	for (var i = centros.length - 1; i >= 0; i--) {
		
		var li= document.createElement("li");
		var a= document.createElement ("a");
		a.textContent= centros[i].Nombre;
		li.appendChild(a);
		console.log(centros);
		lista.appendChild(li);
	};


	$("li a").click(function(){
    var x = $(this).text() + '<span class="caret pull-right"></span>';
    $("#dropdownMenu1").html(x);
	});


});


var centros = 
	[
		{
			"id_centro":	"1",
			"Nombre": 		"Mejor Salud",
			"Ciudad":		"Guayaquil",
			"Direccion": 	"Av. Juan Tanca Marengo",
			"Descripcion":	"El mejor Centro médico de la ciudad",
			"Examenes":		[
								{
									"Nombre": 	"Recuento de Células Sanguíneas",
									"Tipo":		"Sangre",
									"costo":	"45"
			
								},
								{
									"Nombre": 	"Química Sanguínea",
									"Tipo":		"Sangre",
									"costo":	"30"
			
								},
								{
									"Nombre": 	"Cultivo de Sangre",
									"Tipo":		"Sangre",
									"costo":	"70"
			
								},
								{
									"Nombre": 	"Prueba de Plomo",
									"Tipo":		"Sangre",
									"costo":	"20"
			
								},
								{
									"Nombre": 	"Funcionamiento del Hígado",
									"Tipo":		"Sangre",
									"costo":	"19"
			
								},
							]
		},
		{
			"id_centro":	"2",
			"Nombre": 		"AlfaCentro",
			"Ciudad":		"Guayaquil",
			"Direccion": 	"Urdesa",
			"Descripcion":	"El centro médico por excelencia",
			"Examenes":		[
								{
									"Nombre": 	"Recuento de Células Sanguíneas",
									"Tipo":		"Sangre",
									"costo":	"45"
			
								},
								{
									"Nombre": 	"Química Sanguínea",
									"Tipo":		"Sangre",
									"costo":	"30"
			
								},
								{
									"Nombre": 	"Cultivo de Sangre",
									"Tipo":		"Sangre",
									"costo":	"70"
			
								},
								{
									"Nombre": 	"Prueba de Plomo",
									"Tipo":		"Sangre",
									"costo":	"20"
			
								},
								{
									"Nombre": 	"Funcionamiento del Hígado",
									"Tipo":		"Sangre",
									"costo":	"19"
			
								},
							]
		},
		{
			"id_centro":	"3",
			"Nombre": 		"QuitoMedik",
			"Ciudad":		"Quito",
			"Direccion": 	"Centro Norte",
			"Descripcion":	"Ubicado entre calle x y calle y",
			"Examenes":		[
								{
									"Nombre": 	"Recuento de Células Sanguíneas",
									"Tipo":		"Sangre",
									"costo":	"45"
			
								},
								{
									"Nombre": 	"Química Sanguínea",
									"Tipo":		"Sangre",
									"costo":	"30"
			
								},
								{
									"Nombre": 	"Cultivo de Sangre",
									"Tipo":		"Sangre",
									"costo":	"70"
			
								},
								{
									"Nombre": 	"Prueba de Plomo",
									"Tipo":		"Sangre",
									"costo":	"20"
			
								},
								{
									"Nombre": 	"Funcionamiento del Hígado",
									"Tipo":		"Sangre",
									"costo":	"19"
			
								},
							]
		},
		{
			"id_centro":	"4",
			"Nombre": 		"CuencaMedik",
			"Ciudad":		"Cuenca",
			"Direccion": 	"Centro Norte",
			"Descripcion":	"Ubicado entre calle x y calle y",
			"Examenes":		[
								{
									"Nombre": 	"Recuento de Células Sanguíneas",
									"Tipo":		"Sangre",
									"costo":	"45"
			
								},
								{
									"Nombre": 	"Química Sanguínea",
									"Tipo":		"Sangre",
									"costo":	"30"
			
								},
								{
									"Nombre": 	"Cultivo de Sangre",
									"Tipo":		"Sangre",
									"costo":	"70"
			
								},
								{
									"Nombre": 	"Prueba de Plomo",
									"Tipo":		"Sangre",
									"costo":	"20"
			
								},
								{
									"Nombre": 	"Funcionamiento del Hígado",
									"Tipo":		"Sangre",
									"costo":	"19"
			
								},
							]
		},
	];