let numero = prompt("Ingresar el Número");

function determinar_numero_impar(p1) {

    if (p1 %= 2) {

        return "El número es Impar";


    } else {

        return "El número es Par";

    }




}

document.write(determinar_numero_impar(numero));