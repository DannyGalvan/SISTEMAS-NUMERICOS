function isBinario(num) {
    let letra = num.toString();
    let arreglo = letra.split('');
    let total = 0;
    for (const digito of arreglo) {
        if (digito != "0" && digito != "1") {
             total++
        }
    }  
    if (total != 0) {
        return false
    }else{
        return true
    }
}

function isHexadecimal(num) {
    let letra = num.toString().toUpperCase();
    let arreglo = letra.split('');
    let total = 0;
    for (const digito of arreglo) {
        if (digito != "A" && digito != "B" && isNaN(parseInt(digito)) && digito != "C" && digito != "D" && digito != "E" && digito != "F") {
             total++
        }
    }  
    if (total != 0) {
        return false
    }else{
        return true
    }
}

function isOctal(num) {
    let letra = num.toString();
    let arreglo = letra.split('');
    let total = 0;
    for (const digito of arreglo) {
        if (digito == 8 || digito == 9 || isNaN(parseInt(digito))) {
             total++
        }
    }  
    if (total != 0) {
        return false
    }else{
        return true
    }
}

function Errores(dato) {
    if (dato <= 0) {
        return "ingrese un numero valido";
    }else if (!isHexadecimal(dato) && hexadecimal.checked) {
        return "su numero no es hexadecimal";
    }else if (!isOctal(dato) && octal.checked){
        return "su numero no es Octal";
    }else if (!isBinario(dato) && binario.checked) {
        return "su numero no es binario";
    }else if (!isHexadecimal(dato) && decimal.checked) {
        return "su numero no es decimal";
    }else{
        return " ";
    }      
}

export {isBinario, isOctal, isHexadecimal, Errores};