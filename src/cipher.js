window.cipher = {
  encode:(offset,msj) => {
   let resultado = "";


for (let i=0;i<msj.length;i++){
  let textoconvertido= msj.charCodeAt(i);
  if (textoconvertido===32){
   let cambioDePosicion= String.fromCharCode(textoconvertido);
   resultado += cambioDePosicion;
 } else if(textoconvertido>=65 && textoconvertido <=90) {
    let textoconvertido= msj.charCodeAt(i);
    let offsetDos=  parseInt(offset);
    let formula = (textoconvertido-65+offsetDos)%26+65;
    let cambioDePosicion= String.fromCharCode(formula);
    resultado += cambioDePosicion;
  }

  else if (textoconvertido>=97 && textoconvertido <=122) {
    let textoconvertido= msj.charCodeAt(i);
    let offsetDos=  parseInt(offset);
    let formula = (textoconvertido-97+offsetDos)%26+97;
    let cambioDePosicion= String.fromCharCode(formula);
    resultado += cambioDePosicion;

  }

}

return(resultado);
 //  let textoconvertido= mayusculas.charCodeat();

  },
  decode:(offset,msj) => {
    let resultado = "";


    for (let i=0;i<msj.length;i++){
      let textoconvertido= msj.charCodeAt(i);
      if (textoconvertido===32){
       let cambioDePosicion= String.fromCharCode(textoconvertido);
       resultado += cambioDePosicion;
     } else if(textoconvertido>=65 && textoconvertido <=90) {
        let textoconvertido= msj.charCodeAt(i);
        let offsetDos=  parseInt(offset);
        let formula = (textoconvertido+65-offsetDos)%26+65;
        let cambioDePosicion= String.fromCharCode(formula);
        resultado += cambioDePosicion;
      }

      else if (textoconvertido>=97 && textoconvertido <=122) {
        let textoconvertido= msj.charCodeAt(i);
        let offsetDos=  parseInt(offset);
        let formula = (textoconvertido+97-offsetDos +14 )%26+97;
        let cambioDePosicion= String.fromCharCode(formula);
        resultado += cambioDePosicion;

      }

    }

    return(resultado);
  //  let textoconvertido= mayusculas.charCodeat();

},

};
