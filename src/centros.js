$(document).ready(function(){



	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange= function(){
	if(xhttp.readyState==4 && xhttp.status==200){
		var json= JSON.parse(xhttp.responseText);
		var lista= document.getElementById("lista1");
		json.forEach(function(centros){
		var li= document.createElement("li");
		var a= document.createElement ("a");
		a.textContent= centros.Nombre;

		li.appendChild(a);
		console.log(centros);
		lista.appendChild(li);
		});
		
	}
	};
	xhttp.open("GET", "datos/centros.json", true);
	xhttp.send();



	

});


var c = 
{
	"Centros_Medico":
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

	]
};