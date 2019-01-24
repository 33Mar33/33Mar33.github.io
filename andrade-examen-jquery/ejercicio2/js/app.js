$(document).ready(function(){
    console.log("Loaded");

    $("#btn-ver-perros").click(function(){
        $(".perro").slideToggle();
        $("#btn-ver-perros").addClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
    });
    $("#btn-ver-gatos").click(function(){
        $(".gato").slideToggle();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").addClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
    });
    $("#btn-ver-peces").click(function(){
        $(".pez").slideToggle();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").addClass('btn-success');
    });
    $("#btn-eliminar-filtros").click(function(){
        $(".perro").show();
        $(".gato").show();
        $(".pez").show();
        $("#btn-ver-perros").removeClass('btn-success');
        $("#btn-ver-gatos").removeClass('btn-success');
        $("#btn-ver-peces").removeClass('btn-success');
        $("#btn-eliminar-filtros").addClass('btn-success');

    });
    

 });