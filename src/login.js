$(document).ready(function(){
    $("li a").click(function(){
        var x = $(this).text() + '     <span class="caret"></span>';
        $("#dropdownMenu1").html(x);
    });

    $("#submit").click(function(){
    	var y = $("#dropdownMenu1").text();
    	if (y=="Paciente") 
    	{
		    window.location.href = "Paciente/centrosmedicos.html";
		}
		if (y=="Operario") 
    	{
		    window.location.href = "Laboratorista/marcar.html";
		} 
		if (y=="Laboratorista") 
    	{
		    window.location.href = "Operario/registrar.html";
		}  
    });
});