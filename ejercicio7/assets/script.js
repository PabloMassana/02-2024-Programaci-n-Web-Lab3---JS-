
function requestValue(valueName) {
    let value;
    do {
        value = prompt(`Por favor, ingresa el valor para ${valueName}:`);
    } while (value === null || value === "");
    //funcion para poder ingresar los valores.
    return value;
}

function main() {
    let a = requestValue("a");
    let b = requestValue("b");
    //Declaramos las variables y pedimos sus valores.

    [a, b] = [b, a];
    //Indicamos que los valores van a intecambiarse.
    alert(`Los valores fueron intercambiados, ahora a = ${a} y b = ${b}`);
    //alerta que nos muestra el cambio de valores.
}

main();
