function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
// Función que permite crear un contador

// Función que solicita un numero positivo(no negativo)
function requestNumber() {
    let number;
    do {
        number = prompt("Ingrese un numero positivo, por favor:");
        number = Number(number);
    } while (isNaN(number) || number < 0 || !Number.isInteger(number)); 
    // Validacion de que el numero es un entero positivo.
    return number;
}

// Funciónque muestra el valor del contador
function showCounter(counter, limit) {
    for (let i = 0; i <= limit; i++) {
        alert(`Contador: ${counter()}`);
    }
}

function main() {
    const limit = requestNumber();
    const counter = createCounter();

    showCounter(counter, limit);
}

main();
