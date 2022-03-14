import otraBase from "./decimalOtro.js";
import baseDecimal from "./otroDecimal.js";
import { isBinario } from "./validacion.js";

function RenderBinarioOtrasBases() {
    const binario = document.querySelector("#binario");
    
    if (isBinario(dato.value)) {
       if (binario.checked) {
           elegido.innerText = dato.value;
           result1.value = baseDecimal(dato.value,2);
           res1.innerText = "Decimal";
           result2.value = otraBase(result1.value,8);
           res2.innerText = "Octal";
           result3.value = otraBase(result1.value,16);
           res3.innerText = "Hexadecimal";
           error.innerText = " ";
       }
    }else{
        result1.value = "";
        result2.value = "";
        result3.value = "";
    }
}

export default RenderBinarioOtrasBases;