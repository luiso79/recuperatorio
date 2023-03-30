
/*** dependiendo el boton que elijas en la barra lateral se carga el 
 * correspondiente html en el iframe "dinamico" ***/

document.getElementById("boton_datos").onclick=function(){
    document.getElementById("dinamico").src="datos.html";
    }
    
document.getElementById("boton_estudios").onclick=function(){
    document.getElementById("dinamico").src="estudios.html";
    }    

document.getElementById("boton_experiencia").onclick=function(){
    document.getElementById("dinamico").src="experiencia.html";
    }

document.getElementById("boton_habilidades").onclick=function(){
    document.getElementById("dinamico").src="habilidades.html";
    }
    
document.getElementById("boton_contacto").onclick=function(){
    document.getElementById("dinamico").src="contacto.html";
    }