
function encriptar() {
    //obtenemos la cadena de Texto del textarea 
    let cadenaTexto = document.querySelector("#texto").value;

    let nuevaCadena = "";

    //recorremos char por char
    for (let index = 0; index < cadenaTexto.length; index++) {
        //Evaluamos cada caracter
        switch (cadenaTexto[index]) {
            case 'a':
                nuevaCadena += "ai";
                break;
            case 'e':
                nuevaCadena += "enter";
                break;
            case 'i':
                nuevaCadena += "imes";
                break;
            case 'o':
                nuevaCadena += "ober";
                break;
            case 'u':
                nuevaCadena += "ufat";
                break;
            default:
                nuevaCadena += cadenaTexto[index]; //Consonante o espacio se agrega como esta
                break;
        }
    }

    mostrarResul(nuevaCadena);

}

function desencriptar() {
    //obtenemos la cadena de Texto del textarea a desencriptar
    let cadenaTexto = document.querySelector("#texto").value;

    let nuevaCadena = "";

    //recorremos char por char de la cadena a desencriptar
    let index = 0;
    while (index < cadenaTexto.length) {
        //Evaluamos cada caracter
        switch (cadenaTexto[index]) {
            case 'a':
                nuevaCadena += "a";
                index = index + "ai".length; //Nos saltamos el "ai" en la cadena
                break;
            case 'e':
                nuevaCadena += "e";
                index = index + "enter".length; //Nos saltamos el "enter" en la cadena
                break;
            case 'i':
                nuevaCadena += "i";
                index = index + "imes".length; //Nos saltamos el "imes" en la cadena
                break;
            case 'o':
                nuevaCadena += "o";
                index = index + "ober".length; //Nos saltamos el "ober" en la cadena
                break;
            case 'u':
                nuevaCadena += "u";
                index = index + "ufat".length; //Nos saltamos el "ufat" en la cadena
                break;
            default:
                nuevaCadena += cadenaTexto[index]; //si no es un caracter encriptado agregarlo
                index++; //avanzamos
                break;
        }
    }
    mostrarResul(nuevaCadena);
}

function mostrarResul(stringCadena) {
    document.getElementById("quiero-mover-esto").style.display = "none";
    document.getElementById("caja-resultado").style.display = "block";
    document.querySelector('#texto').value = '';
    document.querySelector('#resulTexto').value = stringCadena;
}

function copiar() {
    let textoCopiar = document.querySelector("#resulTexto");
    textoCopiar.select();
    document.execCommand("copy");
}

document.querySelector("#boton-copiar").addEventListener("click", copiar);