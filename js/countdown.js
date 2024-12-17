// Establece la fecha de lanzamiento de los cachorros (fecha objetivo)
const fechaObjetivo = new Date("2024-12-25T00:00:00").getTime();

// Actualiza el contador cada segundo
const intervalo = setInterval(function() {

    // Obtiene la fecha y hora actual
    const ahora = new Date().getTime();

    // Calcula la distancia entre la fecha objetivo y la fecha actual
    const distancia = fechaObjetivo - ahora;

    // Calcula el número de días, horas, minutos y segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con el ID "countdown"
    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("countdown").innerHTML = "¡Es hora de adoptar!";
    }
}, 1000);
