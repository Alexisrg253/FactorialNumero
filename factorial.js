javascript
function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }

    // Llamada recursiva
    return n * factorial(n - 1);
}

// Ejemplo
let numero = 5;

console.log("El factorial de " + numero + " es: " + factorial(numero));