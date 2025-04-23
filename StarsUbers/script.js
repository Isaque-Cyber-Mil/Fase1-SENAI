document.getElementById('distance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const speedOfLight = 299792; // Velocidade da luz em km/s

    if (isNaN(distance) || distance <= 0) {
        document.getElementById('result').textContent = "Por favor, insira uma distância válida.";
        return;
    }

    const timeInSeconds = distance / speedOfLight;
    const timeInMinutes = timeInSeconds / 60;
    const timeInHours = timeInMinutes / 60;

    document.getElementById('result').textContent = `
        Tempo necessário para viajar ${distance.toLocaleString()}km na velocidade da luz:
        ${timeInSeconds.toFixed(2)} segundos (${timeInMinutes.toFixed(2)} minutos ou ${timeInHours.toFixed(2)} horas).
    `;
});