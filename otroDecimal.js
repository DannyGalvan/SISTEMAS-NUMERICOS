import { isBinario } from "./validacion.js";
import { isHexadecimal } from "./validacion.js";
import { isOctal } from "./validacion.js";

function baseDecimal(numero, base) {
    switch (base) {
        case 2:
            if (isBinario(numero) && base == 2) {
                return converToDecimal(numero,base)
            }
            else{
                return 0
            }
        case 8:    
            if (isOctal(numero) && base == 8) {
                return converToDecimal(numero,base)
            }
            else{
                return 0
            }
        case 16:    
            if (isHexadecimal(numero) && base == 16) {
                return converToDecimal(numero,base)
            }
            else{
                return 0
            }    
        default:
            return 0
    }  
}


function converToDecimal(num,base) {
    let cadena = num.toString().toUpperCase();
    let arreglo = cadena.split('')
    let numero = arreglo.reverse().join('');
    let largo = cadena.length;
    let digito;
    let pocicion;
    let resultado = 0;

    for (let i = 0; i < largo; i++) {
        digito = numero[i];
        if (digito == "A") {
            digito = 10
        }else if(digito == "B"){
            digito = 11
        }else if (digito == "C") {
            digito = 12
        }else if (digito == "D") {
            digito = 13
        }else if (digito == "E"){
            digito = 14
        }else if (digito == "F") {
            digito = 15
        }
        pocicion = digito * base**i;
        resultado += pocicion;
    }
    if (resultado == 0) {
        resultado = "";
    }
    return resultado
}

export default baseDecimal;