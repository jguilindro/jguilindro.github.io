$(document).ready(function(){
    $("li a").click(function(){
        var x = $(this).text() + '<span class="caret pull-right"></span>';
        $("#dropdownMenu1").html(x);
        console.log($("#dropdownMenu1").text());
    });

    $("#submit").click(function(){
    	var y = $("#dropdownMenu1").text();
    	console.log($("#dropdownMenu1").text());
    	if (y=="Paciente") 
    	{
		    window.location.href = "centrosmedicos.html";
		    console.log("1");
		};
		if (y=="Operario") 
    	{
		    window.location.href = "marcar.html";
		    console.log("1");
		} ;
		if (y=="Laboratorista") 
    	{
		    window.location.href = "registrar.html";
		    console.log("1");
		};
    });
});