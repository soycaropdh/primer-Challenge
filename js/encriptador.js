// seleccion de elementos 
const btnEncriptar = document.querySelector(".btn_encriptar");
const textEncriptar= document.querySelector(".Encriptada");
const aviso = document.querySelector(".texto_aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".targeta_contenedor");
const copiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");

// boton de encriptar
btnEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto ==""){
    aviso.style.background = "#50B498";
    aviso.style.color = "#000000";
    aviso.style.fontWeight = "800";
    aviso.textContent  = "El campo de texto no debe estar vacio";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500);

    }
    else if(texto !== txt){
        aviso.style.background = "#50B498";
        aviso.style.color = "#000000";
        aviso.style.fontWeight = "800";
        aviso.textContent  = "No debe tener acentos ni caracteres especiales ";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        

    }
    else if( texto !== texto.toLowerCase()){
        aviso.style.background = "#50B498";
        aviso.style.color = "#000000";
        aviso.style.fontWeight = "800";
        aviso.textContent  = "El texto debe estar todo en minuscula";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        
    }
    else{
        texto = texto.replace(/a/mg, 'ai');
        texto = texto.replace(/e/mg, 'enter');
        texto = texto.replace(/i/mg, 'imes');
        texto = texto.replace(/o/mg, 'ober');
        texto = texto.replace(/u/mg, 'ufat');
    
        respuesta.innerHTML = texto; // coloca el texto encriptado en la tarjeta 
        copiar.style.visibility = "inherit"; // para mostrar el boton de copiar
        contenido.remove(); // remueve los elementos de la tarjeta
        
    }

    
})
 
// btn desemcriptar
btnDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto ==""){
    aviso.style.background = "#50B498";
    aviso.style.color = "#000000";
    aviso.style.fontWeight = "800";
    aviso.textContent  = "El campo de texto no debe estar vacio";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500);

    }
    else if(texto !== txt){
        aviso.style.background = "#50B498";
        aviso.style.color = "#000000";
        aviso.style.fontWeight = "800";
        aviso.textContent  = "No debe tener acentos ni caracteres especiales ";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        

    }
    else if( texto !== texto.toLowerCase()){
        aviso.style.background = "#50B498";
        aviso.style.color = "#000000";
        aviso.style.fontWeight = "800";
        aviso.textContent  = "El texto debe estar todo en minuscula";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);        
    }
    else{
        
        texto = texto.replace(/ufat/mg, 'u');
        texto = texto.replace(/ober/mg, 'o');
        texto = texto.replace(/imes/mg, 'i');
        texto = texto.replace(/enter/mg, 'e');
        texto = texto.replace(/ai/mg, 'a');
    
    
        respuesta.innerHTML = texto; // coloca el texto encriptado en la tarjeta 
        copiar.style.visibility = "inherit"; // para mostrar el boton de copiar
        contenido.remove(); // remueve los elementos de la tarjeta
        
    }

    
})
// boton copiar
copiar.addEventListener("click", e=> {
    e.preventDefault();
    let btnCopiar = respuesta;
    btnCopiar.select();
    document.execCommand("copy");
})

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.backgroundImage = "url('imagenes/fondo.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
});