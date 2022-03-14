import { isHexadecimal } from "./validacion.js";


function otraBase(numero, base) {
    switch (base) {
        case 2:
            if (isHexadecimal(numero) && base == 2) {
                return convertToDecimalOtro(numero,base)
            }
            else{
                return ""
            }
        case 8:    
            if (isHexadecimal(numero) && base == 8) {
                return convertToDecimalOtro(numero,base)
            }
            else{
                return   ""
            }
        case 16:    
            if (isHexadecimal(numero) && base == 16) {
                return convertToDecimalOtro(numero,base)
            }
            else{
                return ""
            }    
        default:
            return ""
    }  
}

function convertToDecimalOtro(numero,base) {
    let convertido = [];
    while (numero >= base) {
        if (numero % base == 10) {
           convertido.push("A"); 
        }else if (numero % base == 11) {
            convertido.push("B");
        }else if (numero % base == 12) {
            convertido.push("C");
        }else if (numero % base == 13) {
            convertido.push("D");
        }else if (numero % base == 14) {
            convertido.push("E");
        }else if (numero % base == 15) {
            convertido.push("F");
        }
        else{
            convertido.push(numero % base);
        }
        let convert = parseInt(numero / base);
        numero = convert;
    }  

    if (numero == 10 && base == 16) {
        numero = "A";
    }else if (numero == 11 && base == 16) {
        numero = "B";
    }else if (numero == 12 && base == 16) {
        numero = "C";
    }else if (numero == 13 && base == 16) {
        numero = "D";
    }else if (numero == 14 && base == 16) {
        numero = "E";
    }else if (numero == 15 && base == 16) {
        numero = "F";
    }
    convertido.push(numero);
    return convertido.reverse().join("");
}

export default otraBase
