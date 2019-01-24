$(document).ready(function(){

	$(".card").hide(nombre);

    $("#registro").submit(function(e){
        e.preventDefault();

        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var nacimiento = $("#nacimiento").val();

        $("h4").text(nombre);
        $("h5").text(apellido);
        var edad = 2019 - nacimiento;
        $("p.card-text").text(edad + " años");

        $(".card").show(nombre);
        

    	
	    
	    
	    

    });

});