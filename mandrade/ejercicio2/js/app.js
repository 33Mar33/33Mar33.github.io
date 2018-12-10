function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var email = document.forms["registro"]["email"];
    var resultado = document.getElementById("resultado");
    if(nombre.value==""){
        alert("Rellena el campo nombre");
        nombre.focus();
        return false;
    }else if(email.value==""){
        alert("Rellena el E-mail");
        email.focus();
        return false;
    }else if(email.value=="admin@sagradoc.es"){
        alert("Este email ya existe");
        email.focus();
        return false;
    } else {
        resultado.innerHTML="<p>Formulario enviado<p>";
        return false;
    }
}