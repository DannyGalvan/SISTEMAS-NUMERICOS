import RenderBinarioOtrasBases from "./renderBinario.js";
import RenderDecimalOtrasBases from "./renderDecimal.js";
import RenderHexadecimalOtrasBases from "./renderHexadecimal.js";
import RenderOctalOtrasBases from "./renderOctal.js";
import { Errores } from "./validacion.js";

const decimal = document.querySelector("#decimal");
const binario = document.querySelector("#binario");
const octal = document.querySelector("#octal");
const hexadecimal = document.querySelector("#hexadecimal");
const elegido = document.querySelector("#elegido");

const button = document.querySelector("#convertir");
button.onclick = () => resultados();


function resultados() {
    if (decimal.checked) {
        elegido.innerText = "";
        RenderDecimalOtrasBases();
        error.innerText = Errores(dato.value);
        dato.value = "";    
    }else if (binario.checked) {
        elegido.innerText = "";
        RenderBinarioOtrasBases();
        error.innerText = Errores(dato.value);
        dato.value = "";
    }else if (octal.checked) {
        elegido.innerText = "";
        RenderOctalOtrasBases();
        error.innerText = Errores(dato.value);
        dato.value = "";  
    }else if (hexadecimal.checked) {
        elegido.innerText = "";
        RenderHexadecimalOtrasBases();
        error.innerText = Errores(dato.value);
        dato.value = "";  
    }else{
        alert("debe seleccionar una opcion");
        error.innerText = Errores(dato.value);
    }
}













