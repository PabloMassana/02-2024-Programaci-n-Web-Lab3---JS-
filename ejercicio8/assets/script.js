function requestQuantity() {
    let quantity;
    do {
        quantity = prompt("¿Cuántos son los números de la secuencia Fibonacci quiere generar?");
        quantity = Number(quantity);
    } while (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)); 
    //validación de que el entero sea positivo
    return quantity;
}
// Función que solicita la cantidad de números de Fibonacci a generar

function fibonacciCalculate(quantity) {
    const fibonacciSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < quantity; i++) {
        fibonacciSequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return fibonacciSequence;
}
// Función para el calculo de la secuencia Fibonacci

function main() {
    const quantity = requestQuantity();

    if (quantity === 0) {
        alert("No se han generado numeros Fibonacci.");
    } else {
        const fibonacciSequence = fibonacciCalculate(quantity);
        alert(`Secuencia de Fibonacci: ${fibonacciSequence.join(', ')}`);
    }
}

main();
