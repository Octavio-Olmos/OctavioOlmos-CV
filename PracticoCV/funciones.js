

document.getElementById('boton_datos').addEventListener("click", function () {
    if(document.getElementById('section_datos').style.display == "inline" ){

        document.getElementById('section_datos').style.display = "none";

    }    
        else {
            document.getElementById('section_datos').style.display = "inline" ;
            document.getElementById('section_habilidades').style.display = "none";
            document.getElementById('section_experiencia').style.display = "none";
        }
});

document.getElementById('boton_habilidades').addEventListener("click", function () {
    if(document.getElementById('section_habilidades').style.display == "inline"){

        document.getElementById('section_habilidades').style.display = "none";
    }    
        else {
            document.getElementById('section_habilidades').style.display = "inline" ;
            document.getElementById('section_experiencia').style.display = "none";
            document.getElementById('section_datos').style.display = "none";
        }
    
});

document.getElementById('boton_experiencia').addEventListener("click", function () {
    if(document.getElementById('section_experiencia').style.display == "inline"){

        document.getElementById('section_experiencia').style.display = "none";
    }    
        else {
            document.getElementById('section_experiencia').style.display = "inline" ;
            document.getElementById('section_datos').style.display = "none";
            document.getElementById('section_habilidades').style.display = "none";
        }
    
});