
let min = 1;
let max = 100;
let guess;
let found = false;

// Frases que se mostrarán si no se ha adivinado el número.
const phrases = [
    "¿Cuál puede ser...?",
    "¡Elegiste un número que no sé contar!",
    "¡Vamos a intentarlo de nuevo!",
    "¡Qué emocionante!",
    "¡Estoy seguro de que lo adivinaré!",
    "¡Esto es divertido!",
    "¡Casi lo tengo!",
    "¡No te rindas, lo adivinaré!",
    "¡Sigamos jugando!"
];

// Se crea función
function startGame() {
    // Reiniciar las variables cuando se preciona iniciar
    min = 1;
    max = 100;
    found = false;

    // Primer número que se muestra 50
    guess = Math.floor((min + max) / 2);
    document.getElementById('message').innerText = `¿El número que tienes en mente es ${guess}?`;
    
    // Habilitar botones de opciones
    document.getElementById('startButton').disabled = true;
    document.getElementById('higherButton').disabled = false;
    document.getElementById('lowerButton').disabled = false;
    document.getElementById('correctButton').disabled = false;
}

// Función para manejar las respuestas del usuario
function makeGuess(response) {
    if (!found) {

        // Se valida opción de botones, se conecta con html
        if (response === 'correcto') {
            // Si es correcta, finaliza el juego
            found = true;
            document.getElementById('message').innerText = `¡Lo sabía! Tu número es: ${guess} .`;
            
            // Habilita el botón de iniciar y las opciones no
            document.getElementById('startButton').disabled = false;
            document.getElementById('higherButton').disabled = true;
            document.getElementById('lowerButton').disabled = true;
            document.getElementById('correctButton').disabled = true;

        } else if (response === 'mayor') {
            // Si da click en mayor, ajusta el límite inferior 51...
            min = guess + 1;
        } else if (response === 'menor') {
            // Si da click en menor, ajusta el límite superior 49...
            max = guess - 1;
        }

        // Si el número no ha sido adivinado, calcula la siguiente suposición
        if (!found) {
            guess = Math.floor((min + max) / 2);
            // Se llaman las frases de intento
            // Se elige una opción aleatoria de frases con math.random
            const optionPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            document.getElementById('message').innerText = `${optionPhrase}   ¿Tu número es ${guess}?`;
        }
    }
}
