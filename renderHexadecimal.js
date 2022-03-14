import otraBase from "./decimalOtro.js";
import baseDecimal from "./otroDecimal.js";
import { isHexadecimal } from "./validacion.js";


function RenderHexadecimalOtrasBases() {
    const hexadecimal = document.querySelector("#hexadecimal");
    
    if (isHexadecimal(dato.value)) {
       if (hexadecimal.checked) {
           elegido.innerText = dato.value;
           elegido.innerText = dato.value;;
           result1.value = baseDecimal(dato.value,16);
           res1.innerText = "Decimal";
           result2.value = otraBase(result1.value,8);
           res2.innerText = "Octal";
           result3.value = otraBase(result1.value,2);
           res3.innerText = "Binario";
           error.innerText = " ";
       }
    }else{
        result1.value = "";
        result2.value = "";
        result3.value = "";
    }
}

export default RenderHexadecimalOtrasBases;