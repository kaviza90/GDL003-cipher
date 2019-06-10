window.cipher = {
  encode:(offset,msj) => {
   let resultado = "";
    let mayusculas= msj.toUpperCase();

for (let i=0;i<mayusculas.length;i++){
  let textoconvertido= mayusculas.charCodeAt(i);
  if (textoconvertido===32)
  {
   let cambioDePosicion= String.fromCharCode(textoconvertido);
   resultado += cambioDePosicion;
  }
else{
  let textoconvertido= mayusculas.charCodeAt(i);
let offsetDos=  parseInt(offset);
  let formula = (textoconvertido-65+offsetDos)%26+65;
  let cambioDePosicion= String.fromCharCode(formula);
  resultado += cambioDePosicion;
}

}

return(resultado);
 //  let textoconvertido= mayusculas.charCodeat();

  },
  decode:(offset,msj) => {
    let resultado = "";
     let mayusculas= msj.toUpperCase();

 for (let i=0;i<mayusculas.length;i++){

  let textoconvertido= mayusculas.charCodeAt(i);
 if (textoconvertido===32)
 {
  let cambioDePosicion= String.fromCharCode(textoconvertido);
  resultado += cambioDePosicion;
 }
else{
  let textoconvertido= mayusculas.charCodeAt(i);
 let offsetDos=  parseInt(offset);
   let formula = (textoconvertido+65-offsetDos)%26+65;
   let cambioDePosicion= String.fromCharCode(formula);
   resultado += cambioDePosicion;
}

 }

 return(resultado);
  //  let textoconvertido= mayusculas.charCodeat();

   },

};
