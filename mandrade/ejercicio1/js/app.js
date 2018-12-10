function mostrarTextoVerde(){
    var buenasNoticias = document.getElementById("buenas-noticias");
    var malasNoticias = document.getElementById("malas-noticias");
    var regularesNoticias = document.getElementById("regulares-noticias");
    if(buenasNoticias.style.display = "none"){
        buenasNoticias.style.display = "flex";
    }if(malasNoticias.style.display = "flex"){
        malasNoticias.style.display = "none";
    }if(regularesNoticias.style.display = "flex"){
        regularesNoticias.style.display = "none";
    }
}
function mostrarTextorojo(){
    var buenasNoticias = document.getElementById("buenas-noticias");
    var malasNoticias = document.getElementById("malas-noticias");
    var regularesNoticias = document.getElementById("regulares-noticias");
    if(malasNoticias.style.display = "none"){
        malasNoticias.style.display = "flex";
    }if(buenasNoticias.style.display = "flex"){
        buenasNoticias.style.display = "none";
    }if(regularesNoticias.style.display = "flex"){
        regularesNoticias.style.display = "none";
    }

}
function mostrarTextoamarillo(){
    var regularesNoticias = document.getElementById("regulares-noticias");
    var buenasNoticias = document.getElementById("buenas-noticias");
    var malasNoticias = document.getElementById("malas-noticias");
    if(regularesNoticias.style.display = "none"){
        regularesNoticias.style.display = "flex";
    }if(malasNoticias.style.display = "flex"){
        malasNoticias.style.display = "none";
    }if(buenasNoticias.style.display = "flex"){
        buenasNoticias.style.display = "none";
    }
    
}