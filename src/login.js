$(document).ready(function(){
    $("li a").click(function(){
        var x = $(this).text() + '<span class="caret pull-right"></span>';
        $("#dropdownMenu1").html(x);
        console.log($("#name").val());
    });

    $("#submit").click(function(){
    	var y = $("#dropdownMenu1").text();    

   	    var ci = $("#name");
    	var cont = $("#pass");
    	var b = false;	


    	

    	for (var i = personas.length - 1; i >= 0; i--) {

    		console.log(personas[i].Cédula);
    		console.log(ci.val());
    		console.log(personas[i].password);
    		console.log(cont.val());
			if( personas[i].Cédula==ci.val() && personas[i].password==cont.val())
			{
				var m = personas[i].tipos_Usuario;
				console.log(5);
				for (var j = m.length - 1; j >= 0; j--) {
					if($("#dropdownMenu1").text()==m[j].tipo)
					{
						var b = true;
						console.log("1");
					}
				};
			};
		};
    	

    	if (y=="Paciente" && b) 
    	{
		    window.location.href = "centrosmedicos.html";
		    console.log("1");
		}
		else if (y=="Operario" && b) 
    	{
		    window.location.href = "marcar.html";
		    console.log("1");
		} 
		else if (y=="Laboratorista" && b) 
    	{
		    window.location.href = "registrar.html";
		    console.log("1");
		}
		else
		{
			$("#error").show();
		};
    });
});


var personas = 
	[
		{
			"Nombres": 		"Jorge Luis",
			"Apellidos": 	"Cedeño Arteaga",
			"Cédula": 		"1312436114",
			"Correo": 		"jlcedeno@espol.edu.ec",
			"Direccion":	"Urb. San Felipe",
			"Telefonos":	[
								{"telef": 	"0984563452"}
							],
			"Foto":  		"images/jorge.jpeg",
			"password":		"jlcajlca",
			"tipos_Usuario":	[
									{"tipo":	"Paciente"},
									{"tipo":	"Operario"},
									{"tipo":	"Laboratorista"}
							  	],
			"Mis_examenes":	[
								{
									"Fecha": 	"03/04/2015",
									"tipo": 	"sangre",
									"Estado": 	"1",
									"link":		"",
									"Centro":	"1"
								},
								{
									"Fecha": 	"03/06/2015",
									"tipo": 	"orina",
									"Estado": 	"3",
									"link":		"examenes/exam-1.pdf",
									"Centro":	"3"
								},
								{
									"Fecha": 	"05/07/2015",
									"tipo": 	"heces",
									"Estado": 	"2",
									"link":		"",
									"Centro":	"2"
								}
							]		
		},
		{
			"Nombres": 		"Julio Cesar",
			"Apellidos": 	"Guilindro",
			"Cédula": 		"1234567890",
			"Correo": 		"jlcedeno@espol.edu.ec",
			"Direccion":	"Urdesa",
			"Telefonos":	[
								{"telef": 	"0989874561"}
							],
			"Foto":  		"images/julio.jpeg",
			"password":		"julio123",
			"tipos_Usuario":	[
									{"tipo":	"Paciente"},
									{"tipo":	"Operario"},
									{"tipo":	"Laboratorista"}
							  	],
			"Mis_examenes":	[
								{
									"Fecha": 	"03/04/2015",
									"tipo": 	"sangre",
									"Estado": 	"1",
									"link":		"",
									"Centro":	"1"
								},
								{
									"Fecha": 	"03/06/2015",
									"tipo": 	"orina",
									"Estado": 	"3",
									"link":		"examenes/exam-1.pdf",
									"Centro":	"3"
								},
								{
									"Fecha": 	"05/07/2015",
									"tipo": 	"heces",
									"Estado": 	"2",
									"link":		"",
									"Centro":	"2"
								}
							]		
		},  
		{
			"Nombres": 		"Ana Maria",
			"Apellidos": 	"sanchez",
			"Cédula": 		"1234567850",
			"Correo": 		"ana@espol.edu.ec",
			"Direccion":	"ceibos",
			"Telefonos":	[
								{"telef": 	"0989874561"}
							],
			"Foto":  		"images/ana.jpeg",
			"password":		"12341234",
			"tipos_Usuario":	[
									{"tipo":	"paciente"},
									{"tipo":	"operario"},
									{"tipo":	"laboratorista"}
							  	],
			"Mis_examenes":	[
								{
									"Fecha": 	"03/04/2015",
									"tipo": 	"sangre",
									"Estado": 	"1",
									"link":		"",
									"Centro":	"1"
								},
								{
									"Fecha": 	"03/06/2015",
									"tipo": 	"orina",
									"Estado": 	"3",
									"link":		"examenes/exam-1.pdf",
									"Centro":	"3"
								},
								{
									"Fecha": 	"05/07/2015",
									"tipo": 	"heces",
									"Estado": 	"2",
									"link":		"",
									"Centro":	"2"
								}
							]		
		}
	]