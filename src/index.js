let mensaje = document.getElementById("texto");
let cifrar= document.getElementById("cifrar");
let numero= document.getElementById("offset");
let decifrar= document.getElementById("descifrar");

cifrar.addEventListener("click",()=>{
    let msj= mensaje.value;
    let offset = numero.value;
    let resultFinal = window.cipher.encode(offset,msj);
    document.getElementById ("texto-cifrado").innerHTML= resultFinal;
});

decifrar.addEventListener("click",()=>{
    let msj= mensaje.value;
    let offset = numero.value;
    let resultFinal = window.cipher.decode(offset,msj);
    document.getElementById ("decifrar-texto").innerHTML= resultFinal;
});
