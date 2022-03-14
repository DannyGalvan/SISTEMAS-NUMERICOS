import otraBase from "./decimalOtro.js";
import baseDecimal from "./otroDecimal.js";
import { isOctal } from "./validacion.js";


function RenderOctalOtrasBases() {
    const octal = document.querySelector("#octal");
    
    if (isOctal(dato.value)) {
       if (octal.checked) {
           elegido.innerText = dato.value;
           result1.value = baseDecimal(dato.value,8);
           res1.innerText = "Decimal";
           result2.value = otraBase(result1.value,16);
           res2.innerText = "Hexadecimal";
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

export default RenderOctalOtrasBases;