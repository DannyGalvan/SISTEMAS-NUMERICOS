import otraBase from "./decimalOtro.js"
import { isHexadecimal } from "./validacion.js";

const dato = document.querySelector("#dato");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const res1 = document.querySelector("#res1");
const res2 = document.querySelector("#res2");
const res3 = document.querySelector("#res3");
const error = document.querySelector("#error");

function RenderDecimalOtrasBases() {
    const decimal = document.querySelector("#decimal");
    
    if (isHexadecimal(dato.value)) {
       if (decimal.checked) {
           elegido.innerText = dato.value;
           result1.value = otraBase(dato.value,16);
           res1.innerText = "Hexadecimal";
           result2.value = otraBase(dato.value,8);
           res2.innerText = "Octal";
           result3.value = otraBase(dato.value,2);
           res3.innerText = "Binario";
           error.innerText = " ";
       }
    }else{
        result1.value = "";
        result2.value = "";
        result3.value = "";
    }
}

export default RenderDecimalOtrasBases;
