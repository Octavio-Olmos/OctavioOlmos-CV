/*
document.getElementById('boton').onclick = function () {
    console.log ("capturamos el evento click");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS";
}*/

document.getElementById('boton').addEventListener("click", function () {
    console.log ("hola mundo desde listener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS";

}); 

document.getElementById('boton_color').addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});
    
document.getElementById('boton_default').addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(132, 0, 255)";
});
    
document.getElementById('boton_ocultar').addEventListener("click", function () {
    document.getElementById('demo').style.display = "none";
});

document.getElementById('boton_restablecer').addEventListener("click", function () {
    document.getElementById('demo').style.display = "inline" ;
});

const collection =document.getElementsByClassName ("Prueba");
for (let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "green";
}